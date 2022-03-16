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


const AddMaintenance = props => {
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
      label: 'MITUSBUSHI CANTER, B 7031 QWE'
    },
    {
      value: 'indomobil',
      label: 'MITUSBUSHI CANTER, B 7332 TEH'
    },
    {
      value: 'indomobil',
      label: 'MITUSBUSHI FUSO, B 7988 ABC'
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
          title="Add Maintenance Schedule"
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
                label="Select Vehicle"
                margin="dense"
                name="vehicleName"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {expedition.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Service tasks"
                margin="dense"
                name="tasks"
                onChange={handleChange}
                required
                value={values.tasks}
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
                label="interval"
                margin="dense"
                name="serviceInterval"
                onChange={handleChange}
                required
                value={values.serviceInterval}
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
                label="notes"
                margin="dense"
                name="notes"
                onChange={handleChange}
                required
                value={values.notes}
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

AddMaintenance.propTypes = {
  className: PropTypes.string

};

export default AddMaintenance;
