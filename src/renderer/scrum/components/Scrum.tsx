import React, { useState } from 'react';
import { NameListWheel } from './NameListWheel';
import { Configures } from './Configures';
import { Switch, Collapse, FormControlLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PresentList } from './PresentList';
import { useContext } from '../hooks/useContext';
import { colorCode } from '../constants/InitialValues';
import { Labels } from '../constants/Labels';

export const Scrum = () => {
  //control config toggle
  const [isCheckedConfig, setIsCheckedConfig] = useState(false);

  // control showlist toggle
  const [isCheckedPresent, setIsCheckedPresent] = useState(false);

  const [data, setData] = useContext();

  const useStyles = makeStyles({
    prize_wheel: {
      position: 'absolute',
      left: '-100px',
      top: '-50px',
    },
    welcome_page_text_container: {
      position: 'absolute',
      left: '50px',
      top: '90px',
      zIndex: 999,
      cursor: 'pointer',
    },
    welcome_page_spin_main_text: {
      fontFamily: 'Roboto',
      fontSize: '80px',
      fontWeight: 'bold',
      color: colorCode.maroon,
      transform: 'rotate(6deg)',
    },
    welcome_page_spin_sub_text: {
      fontFamily: 'Roboto',
      fontSize: '26px',
      fontWeight: 'bold',
    },
    control_toggles_show_list: {
      position: 'absolute',
      left: 0,
      bottom: '20px',
      zIndex: 999,
    },
    control_toggles_config: {
      position: 'absolute',
      left: 0,
      bottom: '50px',
      zIndex: 999,
    },
  });
  const classes = useStyles();

  const spinTextOnClick = () => {
    setData({
      ...data,
      readyToSpin: true,
    });
  };
  return (
    <>
      {data?.readyToSpin ? (
        <div className={classes.prize_wheel}>
          <NameListWheel />
        </div>
      ) : !isCheckedConfig && !isCheckedPresent ? (
        <div
          className={classes.welcome_page_text_container}
          onClick={spinTextOnClick}
        >
          <h1 className={classes.welcome_page_spin_main_text}>Spinnnn</h1>

          <p className={classes.welcome_page_spin_sub_text}>
            to see our lucky starter
          </p>
        </div>
      ) : null}
      <div className={classes.control_toggles_config}>
        <FormControlLabel
          control={
            <Switch
              checked={isCheckedConfig}
              onChange={() => {
                setIsCheckedConfig((prev) => !prev);
              }}
            />
          }
          label={Labels.configToggle}
        />
      </div>
      <Collapse in={isCheckedConfig}>
        <Configures />
      </Collapse>

      <div className={classes.control_toggles_show_list}>
        <FormControlLabel
          control={
            <Switch
              checked={isCheckedPresent}
              onChange={() => {
                setIsCheckedPresent((prev) => !prev);
              }}
            />
          }
          label={Labels.showListToggle}
        />
      </div>
      <Collapse in={isCheckedPresent}>
        <PresentList />
      </Collapse>
    </>
  );
};
