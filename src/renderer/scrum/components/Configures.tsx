import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext } from '../hooks/useContext';
import { TeamMember } from '../types/scrumProps';
import { colorCode } from '../constants/InitialValues';

export const Configures = () => {
  const [data, setData] = useContext();

  const teamMembers = data?.teamMembers;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //selected checkbox teamMember's name
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
    <FormControl
      sx={{ m: 2 }}
      style={{
        display: 'flex',
        paddingLeft: '30px',
        width: '400px',
        height: '300px',
        backgroundColor: 'white',
        opacity: 0.9,
      }}
    >
      <FormLabel>Attendees</FormLabel>
      <FormGroup
        style={{
          display: 'flex',
          flexFlow: 'column wrap',
          gap: '0 30px',
          overflow: 'auto',
          color: `${colorCode.black}`,
        }}
      >
        {teamMembers.map((teamMember: TeamMember, index: number) => {
          return (
            <FormControlLabel
              key={index}
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
