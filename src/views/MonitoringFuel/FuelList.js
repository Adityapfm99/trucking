import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { MonitoringFuelToolbar, MonitoringFuelTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const VehicleList = () => {
  const classes = useStyles();

  const [vehicle] = useState(mockData);

  return (
    <div className={classes.root}>
      <MonitoringFuelToolbar />
      <div className={classes.content}>
        <MonitoringFuelTable users={vehicle} />
      </div>
    </div>
  );
};

export default VehicleList;
