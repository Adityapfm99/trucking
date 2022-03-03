import React from 'react';
import { Doughnut, Pie,Radar,Polar } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
// BatteryAlertTwoTone
import Build from '@material-ui/icons/Build';
import Check from '@material-ui/icons/Check';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import { BurstMode, LaptopChromebook, PieChart, PieChartRounded, TimelineSharp, Timer } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  deviceIcon: {
    color: theme.palette.icon
  }
}));

const UsersByDevice = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [85, 15],
        type: 'pie',
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.2)',
          'rgba(27, 210, 100)',
          theme.palette.error.main,
          // theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['On Time', 'Late']
  };

  const options = {
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const delivery = [
    {
      title: 'On Time',
      value: '90',
      icon: <Timer/>,
      color: theme.palette.primary.main
    },
    {
      title: 'Late',
      value: '10',
      icon: < TimelineSharp/>,
      color: theme.palette.error.main
    },
   
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <IconButton size="small">
            <RefreshIcon />
          </IconButton>
        }
        title="Delivery Time"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Pie
            data={data}
            options={options}
          />
        </div>
        <div className={classes.stats}>
          {delivery.map(device => (
            <div
              className={classes.device}
              key={device.title}
            >
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography
                style={{ color: device.color }}
                variant="h2"
              >
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

UsersByDevice.propTypes = {
  className: PropTypes.string
};

export default UsersByDevice;
