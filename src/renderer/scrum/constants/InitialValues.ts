export enum colorCode {
  black = '#000000',
  pink = '#DE3163',
  light_purple = '#CCCCFF',
  blue = '#6495ED',
  orange = '#FF7F50',
  dark_yellow = '#FFBF00',
  green = '#008000',
  silver = '#C0C0C0',
  maroon = '#800000',
  olive = '#808000',
  teal = '#008080',
  fuchsia = '#FF00FF',
  red = '#FF0000',
  aqua = '#00FFFF',
}

export const initialValues = {
  teamMembers: [
    { name: 'Jack', isInStandup: true, color: colorCode.black },
    { name: 'Annie', isInStandup: true, color: colorCode.pink },
    { name: 'Ashley', isInStandup: true, color: colorCode.olive },
    { name: 'Barend', isInStandup: true, color: colorCode.dark_yellow },
    { name: 'Brooke', isInStandup: true, color: colorCode.silver },
    { name: 'Eddy', isInStandup: true, color: colorCode.fuchsia },
    { name: 'Ken', isInStandup: true, color: colorCode.blue },
    { name: 'Lei', isInStandup: true, color: colorCode.maroon },
    { name: 'Manoj', isInStandup: true, color: colorCode.orange },
    { name: 'Anthony', isInStandup: true, color: colorCode.aqua },
    { name: 'Caleb', isInStandup: true, color: colorCode.red },
    { name: 'Grace', isInStandup: true, color: colorCode.green },
  ],
  readyToSpin: false,
  firstPresenter: 'jack',
};
