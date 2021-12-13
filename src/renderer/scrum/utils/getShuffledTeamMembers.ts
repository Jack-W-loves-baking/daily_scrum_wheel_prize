import { TeamMember } from '../types/scrumProps';

/**
 * 1. put each team member in the array in an object, then create a sortable key.
 * 2. compare the value of sortable key, sort by the value, order from highest to lowest.
 * 3. unmap to get the original objects
 *
 * @param teamMembers all the rest team members apart from the lucky star
 *
 * @returns a random list of team members
 */
export const getShuffledTeamMembers = (teamMembers: TeamMember[]) => {
  return teamMembers
    .map((teamMember: TeamMember) => ({
      teamMember,
      randomValue: Math.random(),
    }))
    .sort(
      (teamMemberA, teamMemberB) =>
        teamMemberB.randomValue - teamMemberA.randomValue
    )
    .map(({ teamMember }) => teamMember);
};
