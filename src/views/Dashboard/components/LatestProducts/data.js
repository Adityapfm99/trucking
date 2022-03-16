import uuid from 'uuid/v1';
import moment from 'moment';

export default [
  {
    id: uuid(),
    name: 'Driver A',
    total: '5000 Kg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver B',
    total: '3200 Kg',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver C',
    total: '3200 Kg',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver D',
    total: '4200 Kg',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'Driver E',
    total: '3200 Kg',
    updatedAt: moment().subtract(9, 'hours')
  }
];
