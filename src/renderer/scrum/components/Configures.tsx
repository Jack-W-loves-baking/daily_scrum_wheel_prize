import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useContext } from '../hooks/useContext';
import { TeamMember } from '../types/scrumProps';
import { colorCode } from '../constants/InitialValues';

export const Configures = () => {
  // fetch data from provider.
  const [data, setData] = useContext();

  const teamMembers = data?.teamMembers;

  const useStyles = makeStyles({
    config_container: {
      paddingLeft: '30px !important',
      width: '400px',
      height: '300px',
      backgroundColor: 'white',
      opacity: 0.9,
    },
    attendees_list_container: {
      display: 'flex',
      flexFlow: 'column wrap',
      gap: '0 30px',
      overflow: 'auto',
      color: `${colorCode.black}`,
    },
  });
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // selected checkbox teamMember's name
    const selectedName: string = event.target.name;

    setData({
      ...data,
      teamMembers: teamMembers.map((teamMember: TeamMember) => {
        if (teamMember.name === selectedName) {
          teamMember.isInStandup = !teamMember.isInStandup;
        }
        return teamMember;
      }),
    });
  };

  return (
    <FormControl sx={{ m: 2 }} className={classes.config_container}>
      <FormLabel>Attendees</FormLabel>
      <FormGroup className={classes.attendees_list_container}>
        {teamMembers.map((teamMember: TeamMember) => {
          return (
            <FormControlLabel
              key={teamMember.color}
              control={
                <Checkbox
                  key={teamMember.name}
                  defaultChecked
                  onChange={handleChange}
                  name={teamMember.name}
                />
              }
              label={teamMember.name}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
