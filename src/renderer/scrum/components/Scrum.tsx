import React, { useState } from 'react';
import { NameListWheel } from './NameListWheel';
import { Configures } from './Configures';
import { Switch, Collapse, FormControlLabel } from '@mui/material';
import { PresentList } from './PresentList';
import { useContext } from '../hooks/useContext';
import { colorCode } from '../constants/InitialValues';

export const Scrum = () => {
  const [isCheckedConfig, setIsCheckedConfig] = useState(false);
  const [isCheckedPresent, setIsCheckedPresent] = useState(false);
  const [data, setData] = useContext();

  const spinTextOnClick = () => {
    setData({
      ...data,
      readyToSpin: true,
    });
  };
  return (
    <>
      {data?.readyToSpin ? (
        <div style={{ position: 'absolute', left: '-100px', top: '-50px' }}>
          <NameListWheel />
        </div>
      ) : !isCheckedConfig && !isCheckedPresent ? (
        <div
          style={{
            position: 'absolute',
            left: '50px',
            top: '90px',
            zIndex: 998,
            cursor: 'pointer',
          }}
          onClick={spinTextOnClick}
        >
          <h1
            style={{
              fontFamily: 'Roboto',
              fontSize: '80px',
              fontWeight: 'bold',
              color: colorCode.maroon,
              transform: 'rotate(6deg)',
            }}
          >
            Spinnnn
          </h1>

          <p
            style={{
              fontFamily: 'Roboto',
              fontSize: '26px',
              fontWeight: 'bold',
            }}
          >
            to see our lucky starter
          </p>
        </div>
      ) : null}
      <div
        style={{ position: 'absolute', left: 0, bottom: '50px', zIndex: 999 }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isCheckedConfig}
              onChange={() => {
                setIsCheckedConfig((prev) => !prev);
              }}
            />
          }
          label="Config"
        />
      </div>
      <Collapse in={isCheckedConfig}>
        <Configures />
      </Collapse>

      <div
        style={{ position: 'absolute', left: 0, bottom: '20px', zIndex: 999 }}
      >
        <FormControlLabel
          control={
            <Switch
              checked={isCheckedPresent}
              onChange={() => {
                setIsCheckedPresent((prev) => !prev);
              }}
            />
          }
          label="Show List"
        />
      </div>
      <Collapse in={isCheckedPresent}>
        <PresentList />
      </Collapse>
    </>
  );
};
