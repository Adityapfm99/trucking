import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));


const AddDriver = props => {
  const { className, ...rest } = props;



  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const states = [
    {
      value: 'own',
      label: 'Own'
    },
    {
      value: 'rent',
      label: 'Rental'
    }
  ];
  const expedition = [
    {
      value: 'luar',
      label: 'Luar'
    },
    {
      value: 'indomobil',
      label: 'Indomobil'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          // subheader="The information can be edited"
          title="Add Driver"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Driver name"
                margin="dense"
                name="driverName"
                onChange={handleChange}
                required
                value={values.driverName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="NIK"
                margin="dense"
                name="nik"
                onChange={handleChange}
                required
                value={values.nik}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="PIC"
                margin="dense"
                name="pic"
                onChange={handleChange}
                required
                value={values.pic}
                variant="outlined"
              >
               
              </TextField>
            </Grid>
           
            <Grid
              item
              md={6}
              xs={12}
            >
               <TextField
                fullWidth
                label="Vehicle name"
                margin="dense"
                name="vehicleName"
                onChange={handleChange}
                required
                value={values.vehicleName}
                variant="outlined"
              >
                
              </TextField>
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddDriver.propTypes = {
  className: PropTypes.string

};

export default AddDriver;
