import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Driver A',
    total: '8870 Kg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver B',
    total: '7900 Kg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver C',
    total: '8250 Kg',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver D',
    total: '8105 Kg',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver E',
    total: '8710 Kg',
    updatedAt: moment().subtract(9, 'hours')
  }
];
