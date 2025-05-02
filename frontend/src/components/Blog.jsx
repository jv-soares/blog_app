import { Paper, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeBlog } from '../reducers/blogReducer';
import LikeButton from './LikeButton';

const Blog = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
      <Paper
        sx={{
          p: 4,
          mb: 2,
          ':hover': { backgroundColor: 'grey.50' },
        }}
      >
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='column'>
            <Typography variant='h6' component='h2'>
              {blog.title}
            </Typography>
            <Typography variant='body1'>by {blog.author}</Typography>
          </Stack>
          <LikeButton
            likeCount={blog.likes}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              dispatch(likeBlog(blog));
            }}
          />
        </Stack>
      </Paper>
    </Link>
  );
};

export default Blog;
