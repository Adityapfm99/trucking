import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ReminderToolbar = props => {
  const { className,history, ...rest } = props;

  const classes = useStyles();
  // const { history } = props;

  const addVehicle = event => {
    console.log(event)
    event.preventDefault();
    props.history.push('/dashboard');
};

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
 
        <Button
          color="primary"
          variant="contained"
          href = '/addMaintenance'
        >
          Add Maintenance
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search vehicle"
        />
        
      </div>
    </div>
  );
};

ReminderToolbar.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object
};

export default ReminderToolbar;
