import { Typography } from '@mui/material';
import { StyledHome, TaskImage } from './sharedStyles.styled';
import task from '../images/task.png';

function Home() {
  return (
    <StyledHome>
      <Typography variant="h2">Unlock Your Productivity Potential!</Typography>
      <Typography variant="body1">
        Your Task Manager is here to supercharge your day.
      </Typography>
      <TaskImage src={task} alt="Task list" />
    </StyledHome>
  );
}

export default Home;
