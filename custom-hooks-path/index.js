import { ItemId, AddNewItem, ListTable } from '@keystonejs/app-admin-ui/components';
import React from 'react';
import Dashboard from './Dashboard';

export default {
  pages: () => [
    {
      label: 'Content',
      children: [
        { listKey: 'OrangeStaff', label: 'Staff' },
      ],
    }
  ]
};
