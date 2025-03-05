import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { projectsData } from '../../data/projects-data';
export default function AlignItemsList({ id, name, desc, tags, code, demo, image, theme }) {
  return (
    <List

      sx={{
        width: '100%',
        maxWidth: '100%',
        maxHeight: '400px',
        overflowY: 'hidden',
        '&:hover': {
          overflowY: 'auto',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'blue',
      }}
      className='scrollbar-pointer'>
      {projectsData.slice(0, 5).map(project => (
        <ListItem
        className='text-blue-600'
          key={project.id}
          alignItems="flex-start"
          sx={{ height: '140px', cursor: 'pointer',maxWidth: '520px' }}

        >
          <ListItemAvatar>
            <Avatar alt={project.projectName} src={project.image} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                {project.projectName}
                {!project.demo == "" && <Typography
                className='hover:text-blue-600'
                  component="span"
                  sx={{ color: '#1D9BF0' }}
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  (click here for live demo)
                </Typography>}

              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                className='hover:text-teal-600'
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                  onClick={() => window.open(project.code, '_blank')}
                >
                  {project.code}
                </Typography>

                <Typography

                  component="span"
                  variant="body2"
                  sx={{ color: 'text.secondary', display: 'block', mt: 1 }}
                >
                  {project.projectDesc}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
