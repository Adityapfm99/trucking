import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { StatusBullet } from 'components';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
},
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const VehicleTable = props => {
  const { className, vehicles, ...rest } = props;

  const classes = useStyles();

  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = event => {
    const { vehicles } = props;

    let selectedVehicles;

    if (event.target.checked) {
      selectedVehicles = vehicles.map(vehicle => vehicle.id);
    } else {
      selectedVehicles = [];
    }

    setSelectedVehicles(selectedVehicles);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedVehicles.indexOf(id);
    let newSelectedVehicles = [];

    if (selectedIndex === -1) {
      newSelectedVehicles = newSelectedVehicles.concat(selectedVehicles, id);
    } else if (selectedIndex === 0) {
      newSelectedVehicles = newSelectedVehicles.concat(selectedVehicles.slice(1));
    } else if (selectedIndex === selectedVehicles.length - 1) {
      newSelectedVehicles = newSelectedVehicles.concat(selectedVehicles.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedVehicles = newSelectedVehicles.concat(
        selectedVehicles.slice(0, selectedIndex),
        selectedVehicles.slice(selectedIndex + 1)
      );
    }

    setSelectedVehicles(newSelectedVehicles);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  const statusColors = {
    normal: 'success',
    pending: 'warning',
    maintenance: 'danger'
  };


  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedVehicles.length === vehicles.length}
                      color="primary"
                      indeterminate={
                        selectedVehicles.length > 0 &&
                        selectedVehicles.length < vehicles.length
                      }
                      onChange={handleSelectAll}
                    />
                     </TableCell>
                  <TableCell>VEHICLE NAME</TableCell>
                  <TableCell>LICENSE PLATE</TableCell>
                  <TableCell>OWNERSHIP</TableCell>
                  <TableCell>EXPEDITION</TableCell>
                  <TableCell>PIC NAME</TableCell>
                  <TableCell>SENSOR LOAD</TableCell>
                  <TableCell>SENSOR FUEL</TableCell>
                  <TableCell>SENSOR TANK</TableCell>
                  <TableCell>STATUS</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.slice(0, rowsPerPage).map(vehicle => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={vehicle.id}
                    selected={selectedVehicles.indexOf(vehicle.id) !== -1}
                  >
                      <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedVehicles.indexOf(vehicle.id) !== -1}
                        color="primary"
                        onChange={event => handleSelectOne(event, vehicle.id)}
                        value="true"
                      />
                    </TableCell>
                   
                    <TableCell>
                      <div className={classes.nameContainer}>
                       
                        <Typography variant="body1">{vehicle.VehicleName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{vehicle.licensePlate}</TableCell>
                    <TableCell>{vehicle.ownership}</TableCell>
                    <TableCell>{vehicle.expedition}</TableCell>
                    <TableCell>{vehicle.picName}</TableCell>
                    <TableCell>{vehicle.sensorLoad}</TableCell>
                    <TableCell>{vehicle.sensorFuel}</TableCell>
                    <TableCell>{vehicle.sensorTank}</TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[vehicle.status]}
                          size="md"
                          justifyContent="center"
                        />
                        {/* {vehicle.status} */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={vehicles.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

VehicleTable.propTypes = {
  className: PropTypes.string,
  vehicle: PropTypes.array.isRequired
};

export default VehicleTable;
