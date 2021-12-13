import React from 'react';
import { useContext } from '../hooks/useContext';
import King from '../public/king.png';
import { TeamMember } from '../types/scrumProps';
import { getShuffledTeamMembers } from '../utils/getShuffledTeamMembers';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';

export const PresentList = () => {
  // fetch data from provider
  const [data] = useContext();
  const firstPresenter = data.firstPresenter;
  const firstPresenterLabel = `1. ${firstPresenter} (Luckiest)`;
  const restPresenters = data.teamMembers.filter(
    (teamMember: TeamMember) =>
      teamMember.isInStandup && teamMember.name !== firstPresenter
  );
  console.log(restPresenters);
  const randomPresenters = getShuffledTeamMembers(restPresenters);

  const useStyles = makeStyles({
    present_container: {
      display: 'flex',
      paddingLeft: '50px',
      paddingTop: '10px',
      width: '400px',
      height: '400px',
      backgroundColor: 'white',
      opacity: 0.99,
      color: 'black',
      flexFlow: 'column wrap',
      gap: '10px 0px',
    },
    present_inner_container: {
      display: 'flex',
      flexDirection: 'row',
    },
    presenter: {
      display: 'flex',
      flexDirection: 'row',
    },
    presenter_text: {
      marginLeft: '2px',
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.present_container}>
      <div className={classes.present_inner_container}>
        <Avatar alt={firstPresenter} src={King} />
        <p> {firstPresenterLabel}</p>
      </div>
      {randomPresenters.map((attendee: TeamMember, i: number) => {
        return (
          <div key={i} className={classes.presenter}>
            <Avatar sx={{ bgcolor: attendee.color }}>
              {attendee.name.charAt(0)}
            </Avatar>
            <p className={classes.presenter_text}>
              {i + 2}. {attendee.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};
