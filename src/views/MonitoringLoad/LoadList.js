import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { MonitoringLoadToolbar, MonitoringLoadTable } from './components';
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
      <MonitoringLoadToolbar />
      <div className={classes.content}>
        <MonitoringLoadTable users={vehicle} />
      </div>
    </div>
  );
};

export default VehicleList;
