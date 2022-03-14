import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { DriverTable, DriverToolbar } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const DriverList = () => {
  const classes = useStyles();

  const [vehicle] = useState(mockData);

  return (
    <div className={classes.root}>
      <DriverToolbar />
      <div className={classes.content}>
        <DriverTable vehicles={vehicle} />
      </div>
    </div>
  );
};

export default DriverList;
