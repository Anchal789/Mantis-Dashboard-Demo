// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Data Listing Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ProfileOutlined
    },
    {
      id: 'util-color',
      title: 'Data Table',
      type: 'item',
      url: '/color',
      icon: icons.ProfileOutlined
    },
    {
      
      id: 'Attendance Setup',
      title: 'Attendance Setup',
      type: 'item',
      url: '#',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Attendance',
      title: 'Attendance',
      type: 'item',
      url: '#',
      icon: icons.LoginOutlined,
      target: true

    },
    {
      id: 'Payroll',
      title: 'Payroll',
      type: 'item',
      url: '#',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Leave',
      title: 'Leave',
      type: 'item',
      url: '#',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'TimeSheet',
      title: 'TimeSheet',
      type: 'item',
      url: '#',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Expense',
      title: 'Expense',
      type: 'item',
      url: '#',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'TDS',
      title: 'TDS',
      type: 'item',
      url: '#',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Employees',
      title: 'Employees',
      type: 'item',
      url: '#',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'Reports',
      title: 'Reports',
      type: 'item',
      url: '#',
      icon: icons.ProfileOutlined,
      target: true
    },
  ]
};

export default pages;
