import { configureStore } from '@reduxjs/toolkit';
import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom/dist';
import BlogDetails from '../../src/components/BlogDetails';
import blogReducer, { blogsSet } from '../../src/reducers/blogReducer';
import userReducer, { userSet } from '../../src/reducers/userReducer';

const mockUser = { id: '1', name: 'test name' };

const mockBlog = {
  id: '123',
  title: 'test blog',
  author: 'test author',
  likes: 1,
  user: mockUser,
};

export const handlers = [
  http.get(`/api/blogs/:id/comments`, async () => HttpResponse.json([])),
  http.put(`/api/blogs/:id`, async ({ request }) => {
    const updatedBlog = await request.json();
    return HttpResponse.json(updatedBlog);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const store = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer,
  },
});

const renderBlog = () => {
  const router = createMemoryRouter(
    [
      {
        path: '/blogs/:id',
        element: <BlogDetails />,
        loader: () => ({ blogId: mockBlog.id }),
      },
    ],
    { initialEntries: [`/blogs/${mockBlog.id}`] },
  );
  return render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  );
};

test('should render likes and url', async () => {
  store.dispatch(blogsSet([mockBlog]));
  store.dispatch(userSet(mockUser));

  const { container } = renderBlog();
  await waitFor(() => screen.getByText(mockBlog.title));

  const likes = container.querySelector('.blog-likes');
  const url = container.querySelector('.blog-url');

  expect(likes).not.toBeNull();
  expect(url).not.toBeNull();
});
