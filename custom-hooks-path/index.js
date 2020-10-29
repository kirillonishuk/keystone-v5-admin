import { ItemId, AddNewItem } from '@keystonejs/app-admin-ui/components';
import React from 'react';

export default {
  pages: () => [
    {
      label: 'Content',
      children: [
        { listKey: 'OrangeStaff', label: 'Staff' },
      ],
    }
  ],
  itemHeaderActions: () => (
    <div>
      <ItemId />
      <AddNewItem />
      <p>Hello world</p>
    </div>
  ),
};
