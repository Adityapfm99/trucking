import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

import { Profile, SidebarNav } from './components';
import { AlarmAdd, AlarmAddSharp, Assessment, Commute, EvStation, LocalShipping, People, SecurityRounded, ViewAgenda } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      title: 'Monitoring Vehicle',
      href: '/monitoringVehicle',
      icon: <LocalShipping/>,
    
    },
    {
      title: 'Monitoring Load',
      href: '/monitoringLoad',
      icon: <Assessment />
    },
    {
      title: 'Monitoring Fuel',
      href: '/monitoringFuel',
      icon: <EvStation />
    },
    {
      title: 'Master Vehicle',
      href: '/masterVehicle',
      icon: <Commute />
    },
    {
      title: 'Master Driver',
      href: '/masterDriver',
      icon: <People />
    },
    {
      title: 'Vendors',
      href: '/masterDriver',
      icon: <ViewAgenda />
    },
    {
      title: 'Service Reminder',
      href: '/serviceReminder',
      icon: <AlarmAdd />
    },
    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },
    // {
    //   title: 'Typography',
    //   href: '/typography',
    //   icon: <TextFieldsIcon />
    // },
    // {
    //   title: 'Icons',
    //   href: '/icons',
    //   icon: <ImageIcon />
    // },
    // {
    //   title: 'Account',
    //   href: '/account',
    //   icon: <AccountBoxIcon />
    // },
    {
      title: 'Change Password',
      href: '/settings',
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
