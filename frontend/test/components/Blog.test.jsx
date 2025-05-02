import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom/dist';
import Blog from '../../src/components/Blog';
import testStore from '../testStore';

const blog = {
  title: 'test blog',
  author: 'test author',
  likes: 1,
  user: { name: 'test name' },
};

const renderBlog = () => {
  return render(
    <Provider store={testStore}>
      <MemoryRouter>
        <Blog blog={blog}></Blog>
      </MemoryRouter>
    </Provider>,
  );
};

test('should render title, author and likes', () => {
  const { container } = renderBlog();

  const title = screen.getByText(blog.title, { exact: false });
  const author = screen.getByText(blog.author, { exact: false });
  const likes = container.querySelector('.blog-likes');
  const url = container.querySelector('.blog-url');

  expect(title).toBeDefined();
  expect(author).toBeDefined();
  expect(likes).toBeDefined();
  expect(url).toBeNull();
});
