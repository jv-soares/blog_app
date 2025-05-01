import { Button, Icon, Typography } from '@mui/material';

const LikeButton = ({ likeCount, onClick }) => {
  return (
    <Button
      variant='contained'
      sx={{ px: 2 }}
      onClick={onClick}
      className='blog-likes'
    >
      <Icon sx={{ mr: 1 }}>thumb_up</Icon>
      <Typography variant='body2' data-testid='like-count'>
        {likeCount}
      </Typography>
    </Button>
  );
};

export default LikeButton;
