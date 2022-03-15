import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { ReminderToolbar, ReminderTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ServiceReminder = () => {
  const classes = useStyles();

  const [vehicle] = useState(mockData);

  return (
    <div className={classes.root}>
      <ReminderToolbar />
      <div className={classes.content}>
        <ReminderTable vehicles={vehicle} />
      </div>
    </div>
  );
};

export default ServiceReminder;
