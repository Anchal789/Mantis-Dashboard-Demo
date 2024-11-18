import PropTypes from 'prop-types';
// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// project import
import MainCard from 'components/MainCard';
import ComponentSkeleton from '../component-overview/ComponentSkeleton';
import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Box, Paper, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useEffect, useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //
function useData(rowLength, columnLength) {
  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    const rows = [];

    for (let i = 0; i < rowLength; i += 1) {
      const row = {
        id: i,
      };

      for (let j = 1; j <= columnLength; j += 1) {
        row[`price${j}M`] = `${i.toString()}, ${j} `;
      }

      rows.push(row);
    }

    const columns = [];

    for (let j = 1; j <= columnLength; j += 1) {
      columns.push({ field: `price${j}M`, headerName: `${j}M` });
    }

    setData({
      rows,
      columns,
    });
  }, [rowLength, columnLength]);

  return data;
}


export default function SamplePage() {
  const columns = [
    {
      field: 'id', headerName: 'ID', width: 90, renderHeader: () => (
        <Typography fontWeight={600}>
          {'ID'}
        </Typography>
      ),
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
      renderHeader: () => (
        <Typography fontWeight={600}>
          {'First Name '}
        </Typography>
      ),
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
      renderHeader: () => (
        <Typography fontWeight={600}>
          {'Last Name '}
        </Typography>
      ),
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
      renderHeader: () => (
        <Typography fontWeight={600}>
          {'Age '}
        </Typography>
      ),
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderHeader: () => (
        <Typography fontWeight={600}>
          {'Full Name '}
        </Typography>
      ),
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const data = useData(100, 1000);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <div className='flex w-full items-center p-2'>
          <div className='w-full flex justify-end'>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                  <Tab label="Item Three" value="3" />
                </TabList>
              </Box>
            </TabContext>

          </div>
          <div className='flex justify-end w-full items-center gap-2'>

            <GridToolbarExport />
            <GridToolbarQuickFilter />
            <GridToolbarFilterButton />
          </div>
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <ComponentSkeleton>
      <Typography variant="h4" fontWeight={600}>Data Table, Tabs, Filter, Sorting, Export, Checkbox, Editing, Search,Pagination</Typography>
      <MainCard sx={{ my: 2 }} content={false}>
        <Box sx={{
          height: 400, width: '100%', '& .super-app-theme--header': {
            backgroundColor: 'rgba(255, 7, 0, 0.55)',
          },
        }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
              filter: {
                filterModel: {
                  items: [
                    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
                  ],
                },
              },
            }}
            slots={{ toolbar: CustomToolbar }}
            sx={{ fontSize: '0.875rem' }}
            pageSizeOptions={[5, 10, 25, { value: -1, label: 'All' }]}
            checkboxSelection
            slotProps={{ toolbar: { showQuickFilter: true } }}
            disableRowSelectionOnClick
          />
        </Box>


      </MainCard>
      <Typography variant="h4" fontWeight={600}>Virtualization</Typography>
      <MainCard sx={{ mt: 2, p: 2 }} content={false}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid {...data} columnBufferPx={100} />
        </Box>
      </MainCard>
    </ComponentSkeleton>
  );
}
