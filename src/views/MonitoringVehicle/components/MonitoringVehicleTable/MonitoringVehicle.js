import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';

import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core';

import { GpsFixed } from '@material-ui/icons';
import { Popup } from '../../..';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 850,
    height: 800,
    marginTop: '10%',
    marginLeft: '30%',
    backgroundColor: theme.palette.background.paper,
    zIndex: theme.zIndex.drawer + 1
  },
  paper: {
    position: 'center',
    width: 850,
    height: 800,
    marginTop: '10%',
    marginLeft: '30%',
    color: '#fff',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    zIndex: theme.zIndex.drawer + 1
  },
  root:{
    backgroundColor:'transparent' // Outside of the Backdrop
  },
 
}));


const UsersTable = props => {
  const { className, users, ...rest } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { history } = props;
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const popUp = event => {
    event.preventDefault();
    history.push('/dashboard');
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>VEHICLE NAME</TableCell>
                  <TableCell>LICENSE PLATE</TableCell>
                  <TableCell>FIRST SYNC</TableCell>
                  <TableCell>DURATION(minutes)</TableCell>
                  <TableCell>LAST SYNC</TableCell>
                  <TableCell>LIVE TRACKING </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow>
                    <TableCell>{user.VehicleName}</TableCell>
                    <TableCell>{user.LicensePlate}</TableCell>
                    <TableCell>{user.FirstSync}</TableCell>
                    <TableCell>{user.Duration}</TableCell>
                    <TableCell>{user.LastSync}</TableCell>
                    <TableCell>
                      <GpsFixed color="primary" onClick={togglePopup}>Open</GpsFixed>
                      <Modal 
                      className={classes.root}
                        open={isOpen}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                       >
                          <div className={classes.modal}>
                          <Popup ></Popup>
                        </div>
                      </Modal>
                      {/* <Link
                        href="/popup"
                        className={classes.link}
                        target="/popup">
                        <GpsFixed />
                      </Link> */}
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
          count={users.length}
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

UsersTable.propTypes = {
  className: PropTypes.string,
  vehicle: PropTypes.array.isRequired
};

export default UsersTable;
