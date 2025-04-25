import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/dist';
import Blog from '../../src/components/Blog';

const blog = {
  title: 'test blog',
  author: 'test author',
  likes: 1,
  user: { name: 'test name' },
};

const renderBlog = () => {
  return render(
    <MemoryRouter>
      <Blog blog={blog}></Blog>
    </MemoryRouter>,
  );
};

test('should render only title and author', () => {
  const { container } = renderBlog();

  const title = screen.getByText(blog.title, { exact: false });
  const author = screen.getByText(blog.author, { exact: false });
  const likes = container.querySelector('.blog-likes');
  const url = container.querySelector('.blog-url');

  expect(title).toBeDefined();
  expect(author).toBeDefined();
  expect(likes).not.toBeNull();
  expect(url).toBeNull();
});
