import React from 'react';
// @ts-ignore
import WheelComponent from 'react-wheel-of-prizes';
import { useContext } from '../hooks/useContext';
import { TeamMember } from '../types/scrumProps';

export const NameListWheel = () => {
  const [data, setData] = useContext();
  const teamMembers = data?.teamMembers;

  const onFinished = (firstPresenter: string) => {
    setData({ ...data, firstPresenter: firstPresenter });
  };

  //array of attendees
  const attendees = teamMembers.filter(
    (teamMember: TeamMember) => teamMember.isInStandup
  );

  // array of attendees' names
  const attendeesNames = attendees.map((attendee: TeamMember) => attendee.name);

  // array of attendees' colors
  const attendeesColors = attendees.map(
    (attendee: TeamMember) => attendee.color
  );

  return (
    <WheelComponent
      segments={attendeesNames}
      segColors={attendeesColors}
      onFinished={(firstPresenter: string) => onFinished(firstPresenter)}
      primaryColor="rgb(26, 39, 76)"
      contrastColor="white"
      buttonText="Go"
      size={150}
      upDuration={100}
      downDuration={200}
      fontFamily="Roboto"
      isOnlyOnce={false}
    />
  );
};
