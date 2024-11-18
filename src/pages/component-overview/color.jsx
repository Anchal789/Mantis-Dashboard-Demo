import { MaterialReactTable, MRT_GlobalFilterTextField, MRT_ToggleFiltersButton, useMaterialReactTable } from 'material-react-table';

//Material UI Imports
import {
  Box,
  Drawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  lighten,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { FaFilter } from "react-icons/fa";
//Mock Data

import { useMemo, useState } from 'react';
import MainCard from 'components/MainCard';

// Example data
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Omaha',
    state: 'Nebraska',
  },
];

const Example = () => {

  const [value, setValue] = useState('list');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  function a11yProps(index) {
    return {
      id: `profile-tab-${index}`,
      'aria-controls': `profile-tabpanel-${index}`
    };
  }

  // Columns should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', // Access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', // Normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    []
  );

  const [alignment, setAlignment] = useState('list');
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleButtonChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const table = useMaterialReactTable({
    columns,
    data,
    renderTopToolbar: ({ table }) => {
      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: '0.5rem', width: '100%' }}>
            <Typography variant="h3" sx={{ width: 'max-content' }} fontWeight={700}>Job List</Typography>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              sx={{ justifyContent: "center", height: "100%", p: "5px", borderRadius: "10px", background: "#EEEEEE", "& .Mui-selected": { background: "#fff", borderRadius: "10px" }, "& .MuiButtonBase-root": { p: "5px 10px !important", wordBreak: "normal", textOverflow: "clip" } }}
              onChange={handleButtonChange}
              aria-label="Platform"
            >
              <ToggleButton selected={alignment === 'list' ? true : false} value="list">List</ToggleButton>
              <ToggleButton value="approval">Approval</ToggleButton>
              <ToggleButton value="cancellation_list">Cancellation List</ToggleButton>
              <ToggleButton value="cancellation_approval">Cancellation Approval</ToggleButton>
            </ToggleButtonGroup>
            {/* <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="profile tabs"
              sx={{
                background: "#F0F4F8",
                border: "1px solid #ccc",
                borderRadius: "15px",
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
                width: '100%',
                '& .MuiTab-root': {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  textTransform: 'capitalize',
                  borderRadius: '15px',
                  p: 0,
                  width: '100%',
                  m: 0.5,
                  '&.Mui-selected': {
                    backgroundColor: '#fff',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    borderColor: '#ccc',
                  },
                },
              }}
            >
              <Tab label="List" {...a11yProps(0)} />
              <Tab label="Approval" {...a11yProps(1)} />
              <Tab label="Cancellation List" {...a11yProps(1)} />
              <Tab label="Cancellation Approval" {...a11yProps(1)} />
            </Tabs> */}
            <Box sx={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <FaFilter fontSize={"20px"} onClick={() => setOpenDrawer(true)} />
              <MRT_GlobalFilterTextField table={table} />
            </Box>
          </Box>
        </Box>
      );
    },
  });

  return (<>
    <Drawer anchor='right' open={openDrawer} onClose={() => setOpenDrawer(false)} sx={{
      zIndex: 10000, background: "transparent", "& .MuiPaper-root": {
        backgroundColor: "transparent", boxShadow: "none"
      }
    }} >
      <Box
        sx={{ width: 400, p: 2, m: 1, height: "100%", background: "#fff", borderRadius: "10px" }}
        role="presentation"
        onClick={() => setOpenDrawer(false)}
      >
        {/* <MainCard> */}

          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Typography variant='h3'>Filter </Typography>
            <FaFilter fontSize={"20px"} />
          </Box>

        {/* </MainCard> */}
      </Box>
    </Drawer>
    < MaterialReactTable table={table} />
  </>)
};

export default Example;
