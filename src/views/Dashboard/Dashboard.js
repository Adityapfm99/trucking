import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  UsersByDevice,
  MonitoringPayload,
  MonitoringFuel,
  MonitoringPayloadXFuel,
  MonitoringFuelXDistance,
  DeliveryTime
} from './components';
import ServiceReminder from './components/ServiceReminder';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={5}
      >
        {<Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid> }
        {<Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid> }
        {<Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid> }
        {<Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid> }
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <MonitoringFuel />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
       
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <MonitoringPayload />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <DeliveryTime />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <MonitoringPayloadXFuel />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <ServiceReminder />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <MonitoringFuelXDistance />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
