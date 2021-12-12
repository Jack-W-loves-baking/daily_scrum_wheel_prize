import React from 'react';
import { useContext } from '../hooks/useContext';
import Avatar from '@mui/material/Avatar';
import King from '../public/king.png';
import { TeamMember } from '../types/scrumProps';

export const PresentList = () => {
  const [data] = useContext();
  const teamMembers = data.teamMembers;
  const firstPresenter = data.firstPresenter;
  const restPresenters = teamMembers.filter(
    (teamMember: TeamMember) =>
      teamMember.isInStandup && teamMember.name !== firstPresenter
  );

  const randomShuffle = (array: TeamMember[]) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const randomPresenters = randomShuffle(restPresenters);

  console.log(randomPresenters);
  return (
    <div
      style={{
        display: 'flex',
        paddingLeft: '50px',
        paddingTop: '10px',
        width: '400px',
        height: '400px',
        backgroundColor: 'white',
        opacity: 0.99,
        color: 'black',
        flexDirection: 'column',
        flexFlow: 'column wrap',
        gap: '15px 0px',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Avatar alt={firstPresenter} src={King} />
        <p> 1. {firstPresenter} (Luckiest)</p>
      </div>
      {randomPresenters.map((attendee: TeamMember, i: number) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar sx={{ bgcolor: attendee.color }}>
              {attendee.name.charAt(0)}
            </Avatar>
            <p style={{ marginLeft: '2px' }}>
              {i + 2}. {attendee.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};