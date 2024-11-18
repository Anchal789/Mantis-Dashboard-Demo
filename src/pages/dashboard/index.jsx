// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
// assets
import avatar1 from 'assets/images/users/Person1.jpg';
import Gallery1 from 'assets/images/users/Image.png';
import Gallery2 from 'assets/images/users/Gallary2.jpg';
import Gallery3 from 'assets/images/users/Gallary3.png';
import Gallery4 from 'assets/images/users/Gallary4.jpg';
import { Autocomplete, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, FormControlLabel, InputLabel, MobileStepper, Paper, Select, styled, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { CalendarOutlined, CaretLeftFilled, CaretRightFilled, ClockCircleOutlined, CloseCircleOutlined, DownCircleOutlined, DownloadOutlined, EyeOutlined, EyeTwoTone, LeftCircleFilled, RightCircleFilled, ScheduleFilled, SoundOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import CalendarImage from 'assets/images/users/Calendar Image.png';
import IconButton from 'themes/overrides/IconButton';
import top100Films from './top100Films';
import { DataGrid } from '@mui/x-data-grid';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

export default function DashboardDefault() {
  const theme = useTheme();
  const [isAdmin, setIsAdmin] = useState(true);
  const [slot, setSlot] = useState('week');
  const [requestApproval, setRequestApproval] = useState('request');

  const status = [
    {
      value: 'today',
      label: 'Today'
    },
    {
      value: 'month',
      label: 'This Month'
    },
    {
      value: 'year',
      label: 'This Year'
    }
  ];

  const error = theme.palette.error.light;
  const success = theme.palette.success.light;
  const warning = theme.palette.warning.light;
  const onLeave = theme.palette.primary.light;
  const weekOff = theme.palette.info.light;

  const chartOptions = {
    chart: { type: 'donut' },
    labels: ['Absent', 'Present', "Holiday", 'Off Day', 'On Leave'],
    colors: [error, success, warning, weekOff, onLeave],
    dataLabels: { enabled: true, formatter: (_, { seriesIndex }) => `${chartSeries[seriesIndex]}%` },
    // legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Employees',
              fontSize: '14px',
              color: '#333',
              formatter: () => '100', // Display your total here
            },
          },
        },
      },
    },
  };

  const chartSeries = [25, 60, 15, 5, 5]; // example data

  const [activeStep, setActiveStep] = useState(0);
  const [announcementActiveStep, setActiveAnnouncementStep] = useState(0);
  const [open, setOpen] = useState(false);

  const [announcementOpen, setAnnouncementOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleAnnouncementNext = () => {
    setActiveAnnouncementStep((prevActiveStep) => prevActiveStep + 1);
  }
  const handleAnnouncementBack = () => {
    setActiveAnnouncementStep((prevActiveStep) => prevActiveStep - 1);
  }

  const images = [Gallery1, Gallery2, Gallery3, Gallery4]
  const imagesName = ["HR Software", "Business Strategy", "Data", "HRIS"]
  const maxSteps = images.length

  const leaveBalance = [2, 13, 10, 5];
  const leaveBalanceTotal = [4, 20, 10, 8];
  const leaveBalanceSeries = leaveBalance.map(value => Number((value / leaveBalanceTotal[leaveBalance.indexOf(value)]) * 100).toFixed(1)); // Convert to percentages

  const leaveBalanceOptions = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 270,
        hollow: {
          size: '50%',
        },
        track: {
          background: ['#FD5E7520', "#FCB93920", "#24E5A320", "#249DF920"], // Tailwind's slate-200
          strokeWidth: '100%',
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            color: '#334155', // Tailwind's slate-700
            fontSize: '16px',
          },
          value: {
            color: '#1e293b', // Tailwind's slate-800
            fontSize: '14px',
            offsetY: 10,
            formatter: function (value, opts) {
              return `${((opts.w.globals.series[opts.seriesIndex] / leaveBalanceTotal[opts.seriesIndex]) * 100).toFixed(1)}%`;
            }
          },
          total: {
            show: true,
            label: 'Total Leave',
            fontSize: '16px',
            formatter: () => leaveBalance.reduce((a, b) => a + b, 0),
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: '12px',
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + leaveBalance[opts.seriesIndex] + "/" + leaveBalanceTotal[opts.seriesIndex];
          },
        },

      },
    },
    labels: ['Paternity Leave', "PL", "Sick Leave", "Causal Leave"],
    colors: ['#FD5E75', "#FCB939", "#24E5A3", "#249DF9"], // Tailwind's indigo-500

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: true,
          },
        },
      },
    ],
  };



  const dates = [];
  const startDate = new Date('2024-11-01');
  const endDate = new Date('2024-11-18');
  const purpleDates = [new Date('2024-11-05'), new Date('2024-11-08'), new Date('2024-11-12'), new Date('2024-11-13')];
  const offwhiteDates = [new Date('2024-11-03'), new Date('2024-11-17'), new Date('2024-11-24')];
  const yellowDates = [new Date('2024-11-09'), new Date('2024-11-14'), new Date('2024-11-23')];

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const currentDate = date.getTime();
    if (purpleDates.some(d => d.getTime() === currentDate)) {
      dates.push({
        title: ``,
        date: date.toISOString().split('T')[0],
        backgroundColor: '#6C5FFC', // purple
      });
    }
    if (offwhiteDates.some(d => d.getTime() === currentDate)) {
      dates.push({
        title: ``,
        date: date.toISOString().split('T')[0],
        backgroundColor: '#000000', // offwhite
      });
    }
    if (yellowDates.some(d => d.getTime() === currentDate)) {
      dates.push({
        title: ``,
        date: date.toISOString().split('T')[0],
        backgroundColor: '#FFB200', // yellow
      });
    }
    if (!purpleDates.some(d => d.getTime() === currentDate) &&
      !offwhiteDates.some(d => d.getTime() === currentDate) &&
      !yellowDates.some(d => d.getTime() === currentDate)) {
      dates.push({
        title: ``,
        date: date.toISOString().split('T')[0],
        backgroundColor: '#34B53A', // light green
      });
      dates.push({
        title: ``,
        date: date.toISOString().split('T')[0],
        backgroundColor: '#FF3A29', // light blue
      });
    }
  }

  const renderEventContent = (eventInfo) => {
    return (
      <span
        style={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: eventInfo.event.backgroundColor,
          marginRight: '4px',
        }}
      ></span>
    );
  };


  const handleAnnouncementClose = () => {
    setAnnouncementOpen(false);
  }

  const [punchInOut, setPunchInOut] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const currentDate = new Date();

  console.log(currentDate.toLocaleDateString([], { month: 'short', day: 'numeric' }))

  useEffect(() => {
    const storedData = localStorage.getItem('timerData');
    if (storedData) {
      const { hours, minutes, seconds, punchInOut } = JSON.parse(storedData);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setPunchInOut(punchInOut);
    }
  }, []);

  useEffect(() => {
    let intervalId;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else if (minutes < 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning, seconds, minutes, hours]);

  useEffect(() => {
    if (punchInOut) {
      setTimerRunning(true);
    } else {
      setTimerRunning(false);
    }
  }, [punchInOut]);

  useEffect(() => {
    const data = { hours, minutes, seconds, punchInOut };
    localStorage.setItem('timerData', JSON.stringify(data));
  }, [hours, minutes, seconds, punchInOut]);

  const handlePunchInOut = () => {
    setPunchInOut(!punchInOut);
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }} display={"flex"} gap={2}>
        <Typography variant="h5">Dashboard</Typography>
        <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }} onClick={() => setIsAdmin(!isAdmin)}>
          {isAdmin ? "Admin" : "Employee"}
        </Button>

      </Grid>
      {/* Thoughts */}
      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item className='flex w-full' justifyContent={"space-between"}>
            <Typography variant="h5">Thoughts</Typography>
            {isAdmin &&
              <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }}>
                List
              </Button>
            }
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: isAdmin ? 1 : 1.5 }} content={false}>
          <Box sx={{ p: 0 }}>
            {/* <Stack spacing={2} sx={{ height: "140px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }} style={{ height: "140px" }}> */}
            <Paper
              variant="outlined"
              sx={{
                padding: 2,
                borderLeft: "4px solid #40C057",
                backgroundColor: "#F1FBF3",
                height: "155px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"
              }}
            >
              <Typography variant="body1" component="blockquote">
                {/* {children} */}
                You can get everything in life you want if you will just help enough other people get what they want.
              </Typography>
            </Paper>
            {/* <Typography variant="h6" color="text.secondary" >
              </Typography> */}
            {/* </Stack> */}
          </Box>
        </MainCard>
      </Grid>
      {/* Announcement */}
      <Grid item xs={12} md={6} lg={6}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item className='flex w-full' justifyContent={"space-between"}>
            <Typography variant="h5">Announcement, Event & Newsletter List  </Typography>
            <Box display={"flex"} gap={1}>
              {isAdmin &&
                <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }}>
                  Add
                </Button>
              }
              {isAdmin &&
                <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }}>
                  List
                </Button>
              }
              <Button size="small" variant="outlined" sx={{ textTransform: 'capitalize' }} onClick={() => { setAnnouncementOpen(true) }}>
                View All
              </Button>
            </Box>
          </Grid>
          <Grid item />
        </Grid>
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={announcementOpen}
          onClose={handleAnnouncementClose}
        >
          <DialogTitle fontSize={"20px"}>Announcements, Events, Newsletters</DialogTitle>
          <DialogContent className='h-full' sx={{ maxHeight: "none" }}>
            <Box sx={{ width: '100%', height: '100%', p: 2, }} display={"flex"} flexWrap={"wrap"} gap={4}>
              <Timeline position="right" className='p-0'>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0', maxWidth: '70px !important' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    13 Nov
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot className='bg-[#E0F4F5]' variant='filled'>
                      <SoundOutlined className='text-xl text-[#00A2AE]' />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }} className='break-words'>
                    <Typography variant="h6" fontWeight={700} component="span" >
                      Diwali Vacation
                    </Typography>
                    <br />
                    <Typography variant='caption' >
                      During this time, access to some or all parts of the platform may be temporarily unavailable. We advise users to complete any important tasks or save their work before the scheduled maintenance begins to avoid any
                    </Typography>
                    <br />
                    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%", gap: 1 }}>

                      <EyeOutlined className='text-lg' />
                      <DownloadOutlined className='text-lg' />
                    </Box>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0', maxWidth: '70px !important' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    11 Nov
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot className='bg-red-100' variant='filled'>
                      <CalendarOutlined className='text-xl text-red-500' />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }} className='break-words'>
                    <Typography variant="h6" fontWeight={700} component="span" >
                      Maintenance
                    </Typography>
                    <br />
                    <Typography variant='caption' >
                      We want to inform you of scheduled maintenance on our platform. To improve the performance, security, and reliability of our services, our team will be conducting a series of updates on [Date, e.g., October 30, 2024] from [Start Time, e.g., 12:00 AM] to [End Time, e.g., 4:00 AM UTC].
                    </Typography>
                    <br />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleAnnouncementClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <MainCard sx={{ mt: 1, }} content={false}>
          <Box sx={{ p: 0.5 }} >
            <Box sx={{ width: '100%', p: 1, pb: 0 }}>
              <Timeline position="right" className='p-0'>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0', maxWidth: '70px !important' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    13 Nov
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot className='bg-[#E0F4F5]' variant='filled'>
                      <SoundOutlined className='text-xl text-[#00A2AE]' />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }} className='truncate'>
                    <Typography variant="h6" fontWeight={700} component="span" >
                      Diwali Vacation
                    </Typography>
                    <br />
                    <Typography variant='caption' >
                      During this time, access to some or all parts of the platform may be temporarily unavailable. We advise users to complete any important tasks or save their work before the scheduled maintenance begins to avoid any
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ m: 'auto 0', maxWidth: '70px !important' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    11 Nov
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot className='bg-red-100' variant='filled'>
                      <CalendarOutlined className='text-xl text-red-500' />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: '12px', px: 2 }} className='truncate'>
                    <Typography variant="h6" fontWeight={700} component="span" >
                      Maintenance
                    </Typography>
                    <br />
                    <Typography variant='caption' >
                      We want to inform you of scheduled maintenance on our platform. To improve the performance, security, and reliability of our services, our team will be conducting a series of updates on [Date, e.g., October 30, 2024] from [Start Time, e.g., 12:00 AM] to [End Time, e.g., 4:00 AM UTC].
                    </Typography>
                    <br />
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          </Box>
        </MainCard>
      </Grid>

      {/* row 2 */}
      {/* MY Attendance */}
      {!isAdmin && (
        <Grid item xs={12} md={5} lg={5}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Mark Attendance</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 1 }} content={false}>
            <Box >
              <Box sx={{ p: 2 }} >
                <Typography variant="h4">Welcome John Doe</Typography>
                <Typography variant="body2" color="text.secondary">Office Timing: 09:00AM to 06:00PM</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                  {/* <Box onClick={handlePunchInOut} width={190} height={190} borderRadius={'50%'} boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} sx={{ border: `3px solid ${punchInOut ? "#ff787590" :  "#6C5FFC90"}`, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                      <Box width={180} height={180} borderRadius={'50%'} sx={{ bgcolor: punchInOut ? "#ff7875" : '#6C5FFC', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer' }}>
                        <Typography variant="h3" color={"white"}>{punchInOut ? "PUNCH OUT" : "PUNCH IN"}</Typography>
                        <Typography variant="body2" fontWeight={700} color={"white"}>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</Typography>
                      </Box>
                    </Box> */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", p: 2, borderRadius: "10px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <Button size="icon" variant="outline" className="">
                        <ClockCircleOutlined className="text-2xl text-gray-500" />
                      </Button>
                      <Box>
                        <Typography variant="h5" color='text.secondary' fontWeight={300}>Date</Typography>
                        <Typography variant="h4">{currentDate.toLocaleDateString([], { month: 'short', day: 'numeric' })}</Typography>
                      </Box>
                      <Divider orientation='vertical' flexItem color='text.secondary' />
                      <Box>
                        <Typography variant="h5" color='text.secondary' fontWeight={300}>Duration</Typography>
                        <Typography variant="h4">{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`} </Typography>
                      </Box>
                    </Box>
                    <Button size='large' onClick={handlePunchInOut} className={`${punchInOut ? "bg-red-500 hover:bg-red-600 text-white hover:text-white" : "bg-green-500 hover:bg-green-600 text-white hover:text-white"} w-44`}>
                      {punchInOut ? "Punch Out" : "Punch In"}
                    </Button>
                  </Box>
                  <Stack spacing={2}>
                    <List
                      component="nav"
                      sx={{
                        px: 0,
                        py: 0,
                        '& .MuiListItemButton-root': {
                          py: 1.78,
                          '& .MuiAvatar-root': avatarSX,
                          '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                        }
                      }}
                    >
                      <ListItemButton divider>
                        <ListItemSecondaryAction>
                          <Stack alignItems="center">
                            <Typography variant="h6" color="secondary" noWrap>
                              In Time
                            </Typography>
                            <Typography variant="h5" >
                              10:49 AM
                            </Typography>
                          </Stack>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                      <ListItemButton divider>
                        <ListItemSecondaryAction>
                          <Stack alignItems="center">
                            <Typography variant="h6" color="secondary" noWrap>
                              Out Time
                            </Typography>
                            <Typography variant="h5" >
                              11:27 AM
                            </Typography>
                          </Stack>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                      <ListItemButton divider>
                        <ListItemSecondaryAction>
                          <Stack alignItems="center">
                            <Typography variant="h6" color="secondary" noWrap>
                              Total Time
                            </Typography>
                            <Typography variant="h5" >
                              00:37:21
                            </Typography>
                          </Stack>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </List>
                  </Stack>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ py: 1, px: 2 }}>
                <Box display={"flex"} width={"50%"} justifyContent={"space-between"}>
                  <Typography variant="h5">Attendance Details Missing</Typography>

                </Box>
                <Box display={"flex"} alignItems={"center"} gap={"5px"} sx={{ overflowX: "scroll", py: 2, maxHeight: "50vh" }} width={"100%"}>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>1</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>4</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>5</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>7</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>10</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>11</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>15</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>17</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>18</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>19</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>21</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>22</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>26</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>27</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>28</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>29</Box>
                  <Box minWidth={"50px"} height={"50px"} border={"1px dashed red"} color={"red"} borderRadius={"7px"} bgcolor={"#F9E6E6"} display={"flex"} alignItems={"center"} justifyContent={"center"}>30</Box>
                </Box>
              </Box>
            </Box>
          </MainCard>
        </Grid>
      )}

      {!isAdmin && (
        <Grid item xs={12} md={4} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Attendance</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 1, p: 0.5 }} content={false}>
            <Box>

              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                contentHeight={400}
                events={dates}
                eventDisplay='list-item'
                eventClick={(info) => console.log(info)}
                eventContent={renderEventContent} // Custom event rendering as dots
                dayCellClassNames={(day) =>
                  day.date.toDateString() === new Date().toDateString() ? 'active' : ''
                }
              />
              <Box sx={{ p: 1 }} display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} gap={1}>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box sx={{width: "15px", height: "15px", backgroundColor: "#34B53A", borderRadius: ""}}></Box>
                  <Typography>Present</Typography>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box sx={{width: "15px", height: "15px", backgroundColor: "#FF3A29", borderRadius: ""}}></Box>
                  <Typography>Absent</Typography>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box sx={{width: "15px", height: "15px", backgroundColor: "#FFB200", borderRadius: ""}}></Box>
                  <Typography>Holiday</Typography>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box sx={{width: "15px", height: "15px", backgroundColor: "#6C5FFC", borderRadius: ""}}></Box>
                  <Typography>Paid Leave</Typography>
                </Box>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box sx={{width: "15px", height: "15px", backgroundColor: "#000000", borderRadius: ""}}></Box>
                  <Typography>Week Off</Typography>
                </Box>
              </Box>
            </Box>
          </MainCard>
        </Grid>
      )}
      {/* {!isAdmin && (
        <Grid item xs={12} md={4} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Attendance</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 1, p: 0.5 }} content={false} >
            <Box sx={{ height: "540px" }}>
              <img src={CalendarImage} alt='CalendarImage' />
            </Box>
          </MainCard>
        </Grid>
      )} */}
      {/* Leave Balance */}
      {!isAdmin && (
        <Grid item xs={12} md={3} lg={3}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Leave Balance</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 1.5 }} content={false}>
            <ReactApexChart options={leaveBalanceOptions} series={leaveBalanceSeries} type="radialBar" height={340} />
          </MainCard>
        </Grid>
      )}
      {/* My Pending */}
      {isAdmin && (
        <Grid item xs={12} md={4} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item className='w-full'>
              <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
                <Typography variant="h5">My Pending</Typography>
                <Box display={"flex"} alignContent={"center"} gap={1}>
                  <Button
                    size="small"
                    fullWidth
                    onClick={() => setRequestApproval('request')}
                    color={requestApproval === 'request' ? 'primary' : 'secondary'}
                    variant={requestApproval === 'request' ? 'outlined' : 'outlined'}
                  >
                    Requests
                  </Button>
                  <Button
                    size="small"
                    fullWidth
                    onClick={() => setRequestApproval('approval')}
                    color={requestApproval === 'approval' ? 'primary' : 'secondary'}
                    variant={requestApproval === 'approval' ? 'outlined' : 'outlined'}
                  >
                    Approvals
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 1 }} content={false}>
            <Box sx={{ p: 2 }}>
              <List
                component="nav"
                sx={{
                  px: 0,
                  py: 0,
                  '& .MuiListItemButton-root': {
                    py: 0,
                    my: 1,
                    '& .MuiAvatar-root': avatarSX,
                    '& .MuiListItemSecondaryAction-root': { ...actionSX, mt: 0, position: 'relative' },
                    '& .MuiListItemText-root': { m: 0 },
                  }
                }}
              >
                <ListItemButton divider className='border border-solid border-[#877CE9] rounded-xl p-0' >
                  <ListItemText primary={<Typography variant="h5" sx={{ p: 1, }}>Regularization</Typography>} />
                  {requestApproval === 'request' ? (
                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#877CE996", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          0
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  ) : (

                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#877CE996", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          89
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  )}
                </ListItemButton>
                <ListItemButton divider className='border border-solid border-[#26B56E] my-1 rounded-xl p-0' >
                  <ListItemText primary={<Typography variant="h5" sx={{ p: 1, }}>Correction</Typography>} />
                  {requestApproval === 'request' ? (
                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#26B56E96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          0
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  ) : (

                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#26B56E96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          14
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  )}
                </ListItemButton>
                <ListItemButton divider className='border border-solid border-[#FF4D4F] my-1 rounded-xl p-0' >
                  <ListItemText primary={<Typography variant="h5" sx={{ p: 1, }}>Leave</Typography>} />
                  {requestApproval === 'request' ? (
                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#FF4D4F96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          0
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  ) : (

                    <ListItemSecondaryAction sx={{ m: 0, p: 0 }}>
                      <Stack alignItems="center">
                        <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", height: "40px", backgroundColor: "#FF4D4F96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                          56
                        </Typography>
                      </Stack>
                    </ListItemSecondaryAction>
                  )}
                </ListItemButton>
              </List>
            </Box>
          </MainCard>
        </Grid>
      )}
      {/* Events */}
      <Grid item xs={12} md={4} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Events</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box display={"flex"} justifyContent={"space-evenly"} sx={{ pt: 2 }}>

            <Button variant="outlined" size='small'>
              All
            </Button>
            <Button variant="outlined" size='small'>
              Birthdays
            </Button>
            <Button variant="outlined" size='small'>
              New Joinees
            </Button>
            <Button variant="outlined" size='small'>
              Anniversaries
            </Button>
          </Box>
          <Divider sx={{ mt: 1 }} />
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 0.4,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={avatar1} />
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Jayesh Patel</Typography>} secondary="Supervisor" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="h6" noWrap display={"flex"} alignItems={"center"} gap={1}>
                    Birthday <svg width="16" height="16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--noto"><path d="M7.45 123.27c2.27 2.46 11.62-1.83 19-5.27 5.53-2.57 27.66-11.65 38.66-16.36 2.97-1.27 7.29-2.93 10.4-7.02 2.76-3.64 10.08-19.1-4.66-34.76-14.96-15.9-30.37-11.51-36.13-7.43-3.39 2.4-6.15 7.81-7.39 10.56-5.24 11.62-12.71 32.91-15.75 41.28-2.23 6.17-6.38 16.56-4.13 19" fill="#ffc107" /><path d="M25.85 66.49c.14 1.74.49 4.57 1.69 10.02.82 3.74 2.16 7.66 3.25 10.25 3.27 7.79 7.86 10.93 12.51 13.45 7.9 4.28 13.27 5.08 13.27 5.08l-6.44 2.63s-3.9-.81-9.22-3.43c-5.07-2.5-10.35-6.73-14.21-15.01-1.67-3.59-2.64-7.07-3.2-9.83-.69-3.42-.8-5.36-.8-5.36zm-7.91 20.28s.8 6.49 6.16 14.68c6.28 9.58 15.05 11.15 15.05 11.15l-5.83 2.4s-6.51-1.99-12.7-10.44c-3.86-5.27-4.94-11.57-4.94-11.57zm-5.55 15.38s1.46 5.6 4.66 9.78c3.81 4.99 8.66 6.44 8.66 6.44l-4.47 1.98s-3.39-.71-7.1-5.41c-2.82-3.57-3.62-7.67-3.62-7.67z" fill="#ff8f00" /><path d="M9.96 116.37c-.2-.45-.2-.96.01-1.4l25.47-52.82 4.19 15.75-26.8 38.71c-.72 1.08-2.34.94-2.87-.24" fill="#fffde7" opacity=".44" /><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="74.384" y1="61.839" x2="44.617" y2="79.699"><stop offset=".024" stop-color="#8f4700" /><stop offset="1" stop-color="#703e2d" /></linearGradient><path d="M41.65 83.19c11.9 13.92 25.45 12.18 29.96 8.66 4.52-3.53 8.09-15.66-3.76-29.35-12.42-14.34-26.48-10.25-29.73-7.15s-7.39 15.07 3.53 27.84" fill="url(#a)" /><path d="M82.52 88.92c-4.34-3.64-6.65-2.99-9.75-1.7-4 1.66-10.29 2.89-18.83 0l2.57-6.19c5.07 1.71 8.74.88 11.91-.99 4.08-2.4 9.66-5.69 18.34 1.6 3.62 3.04 7.33 5.06 10.05 4.14 1.98-.66 3.03-3.61 3.56-5.96.05-.21.13-.81.19-1.34.48-3.67 1.28-11.59 7.18-15.64 6.31-4.33 12.94-4.33 12.94-4.33l1.2 11.92c-3.05-.45-5.17.17-6.96 1.16-6.74 3.75-.87 18.15-11.36 22.99-10.09 4.69-18.34-3.4-21.04-5.66" fill="#03a9f4" /><path d="m45.4 73.72-4.34-3.89c7.97-8.9 5.87-15.44 4.34-20.2-.31-.96-.6-1.87-.79-2.74-.68-3.08-.82-5.76-.61-8.1-3.06-3.81-4.41-7.8-4.5-8.07-1.86-5.63-.46-11.12 2.75-16.27C48.74 4 60.49 4 60.49 4l3.92 10.49c-2.98-.12-12.75.03-15.75 4.76-3.79 5.96-1.3 9.64-1.12 10.06.73-.95 1.47-1.71 2.13-2.3 4.79-4.25 8.95-4.86 11.6-4.62 2.98.27 5.68 1.77 7.61 4.23 2.11 2.7 2.98 6.21 2.31 9.4-.65 3.11-2.72 5.74-5.83 7.41-5.43 2.92-9.95 2.52-12.98 1.51.02.07.03.15.05.22.11.5.33 1.2.59 2.01 1.77 5.48 5.06 14.18-7.62 26.55m7.35-37.53c.58.42 1.19.77 1.82 1.02 2.1.84 4.39.56 6.99-.84 1.53-.82 1.71-1.7 1.77-1.99.18-.87-.12-1.98-.77-2.81-.57-.73-1.23-1.11-2.02-1.19-1.5-.13-3.53.82-5.56 2.63-.97.87-1.71 1.94-2.23 3.18" fill="#f44336" /><path d="m62.77 75.35-6.21-.17s2.95-16.66 12.5-19.46c1.79-.52 3.75-1.05 5.72-1.34 1.17-.18 3.02-.45 3.93-.79.21-1.57-.45-3.57-1.19-5.84-.58-1.76-1.18-3.57-1.5-5.55-.62-3.86.41-7.27 2.9-9.62 3.04-2.85 7.95-3.76 13.49-2.5 3.16.72 5.49 2.27 7.54 3.63 2.93 1.95 4.64 2.94 8.22.53 4.33-2.92-1.33-14.35-4.34-20.95l11.23-4.68c1.51 3.3 8.8 20.28 3.99 29.97-1.62 3.26-4.41 5.42-8.07 6.23-7.96 1.78-12.62-1.32-16.02-3.58-1.61-1.07-3.02-1.91-4.55-2.35-10.63-3.03 4.21 12.61-2.74 19.64-4.17 4.21-14.36 5.32-15.02 5.48-6.56 1.58-9.88 11.35-9.88 11.35" fill="#f48fb1" /><path d="M43.99 38.79c-.19 2.2-.28 3.51.29 6.37 2.75 2.02 8.74 2.02 8.74 2.02-.26-.81-.49-1.51-.59-2.01-.02-.07-.03-.15-.05-.22-6.09-3.04-8.39-6.16-8.39-6.16" fill="#c92b27" /><path fill="#ffc107" d="m31.53 48.64-10.34-5.07 5.15-7.44 8.11 5.37z" /><path d="M16.29 34.6c-5.28-.71-10.66-5.19-11.25-5.7l5.19-6.09c1.57 1.33 4.9 3.56 7.13 3.86z" fill="#fb8c00" /><path d="m25.61 21.27-7.6-2.49c.87-2.66 1.1-5.53.65-8.3l7.9-1.27c.65 4.02.32 8.19-.95 12.06" fill="#03a9f4" /><path fill="#fb8c00" d="m73.073 15.325 7.815-1.71 2.257 10.316-7.815 1.71z" /><path d="m92.46 17.77-5.5-5.81c2.88-2.73 3.54-6.3 3.54-6.34l7.9 1.29c-.1.63-1.11 6.29-5.94 10.86" fill="#ffc107" /><path fill="#fb8c00" d="m95.516 48.581 6.987-2.183 2.387 7.636-6.987 2.183z" /><path d="m97.55 113.03-7.95-.94c.34-2.83-1.77-6.3-2.35-7.07l6.4-4.8c.48.63 4.65 6.4 3.9 12.81" fill="#f44336" /><path d="M120.37 102.89c-2.99-.45-6.05-.63-9.07-.52l-.27-8c3.51-.12 7.06.08 10.53.61z" fill="#fb8c00" /><path fill="#f48fb1" d="m109.614 113.902 5.62-5.693 7.736 7.637-5.621 5.693z" /><path fill="#f44336" d="m93.099 63.331 5.78 6.609-6.609 5.78-5.78-6.609z" /></svg>
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    11 Nov
                  </Typography>
                  <Button variant="contained" size='small' >
                    Wish
                  </Button>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={"P"} className='text-white bg-red-500' />
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Suroshi Thakur</Typography>} secondary="Java Developer" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="h6" noWrap display={"flex"} alignItems={"center"} gap={1}>
                    <p>3<sup>rd</sup> Anniversary</p> <svg width="16" height="16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--noto"><path d="M60.99 15.4a4.336 4.336 0 0 1-.1 5.21C57.56 24.87 50.5 33.4 43.48 38.58c-8.66 6.4-16.55 9.27-20.57 10.44-1.78.52-3.68-.17-4.75-1.68-2.64-3.71-6.84-11.66-5.19-22.91C15.3 8.43 33.63.71 45.51 4.55S60.99 15.4 60.99 15.4" fill="#ffc107" /><radialGradient id="a" cx="39.662" cy="33.066" r="15.102" gradientUnits="userSpaceOnUse"><stop offset=".376" stop-color="#af5700" /><stop offset="1" stop-color="#8f4700" /></radialGradient><path d="M24.5 46.03c-1.17.49-2.23-.88-1.48-1.89 2.2-2.94 6.47-7.76 14.26-14.04 8.45-6.81 14.44-9.22 17.71-10.07 1.13-.29 2 .98 1.32 1.93-2.21 3.1-6.86 8.76-14.47 14.19-7.38 5.27-13.64 8.32-17.34 9.88" fill="url(#a)" /><path d="M32.73 8.74c.46 1.98 2.96 2.67 5.38 2.26 2.62-.44 5.92-.81 5.61-3.47-.32-2.75-4.7-2.64-6.32-2.55-2.37.14-5.08 2.01-4.67 3.76" fill="#ffee58" /><path d="M84.25 3.72c11.96-3.22 29.52.9 33.04 21.62 1.34 7.87-1.79 14.84-3.98 18.56-1.08 1.84-3.19 2.82-5.28 2.4-4.08-.82-11.68-3.11-21.86-9.47-5.66-3.53-13.36-10.41-17.72-14.46-1.97-1.83-2.16-4.9-.39-6.93 3.46-3.97 9.55-9.93 16.19-11.72" fill="#ffc107" /><radialGradient id="b" cx="90.501" cy="31.97" r="21.224" gradientUnits="userSpaceOnUse"><stop offset=".376" stop-color="#af5700" /><stop offset="1" stop-color="#8f4700" /></radialGradient><path d="M73.42 22.5c-.63-.63-.03-1.69.84-1.47 3.82.96 10.87 3.11 17.13 7.02 6.42 4.02 12.91 10.13 16.2 13.4.65.64.01 1.72-.87 1.46-4.02-1.17-11.41-3.77-18.72-8.7-7.43-5.01-12.16-9.3-14.58-11.71" fill="url(#b)" /><path d="M83.59 11.84c-3.95 1.24-5.06-1.55-2.95-3.67 1.52-1.53 7.93-4.26 13.49-3.1 3.67.77 4.82 6.06-.35 5.99-3.52-.05-5.35-.74-10.19.78" fill="#ffee58" /><path d="M110.02 120.05c-12.45-7.83-20.79-23.08-22.31-40.8-1.37-16.01 2.51-32.22 5.63-45.24l6.4 2.91c-2.98 12.46-5.32 26.92-4.06 41.64 1.3 15.23 8.26 28.21 18.6 34.71zm-49.44-2.76-3.3-7.29c3.91-1.77 6.17-6.9 4.83-10.97-.65-1.99-2.05-3.89-3.52-5.9-1.2-1.64-2.45-3.34-3.47-5.29-2.66-5.1-3.29-11.2-1.71-16.73.8-2.79 2.07-5.26 3.31-7.65 1.4-2.7 2.71-5.24 3.05-7.8.31-2.37-.25-4.88-1.55-6.89-1.18-1.81-3-3.37-4.93-5.01-1.46-1.25-2.98-2.54-4.37-4.06-3.29-3.6-4.57-7.89-4.55-12.68l5.57-2.11s1.01 5.44 2.37 7.61c1.43 2.27 3.56 3.81 5.58 5.53 2.28 1.95 5.23 3.58 7.04 6.38 2.32 3.58 3.33 8.06 2.77 12.3-.52 3.94-2.23 7.24-3.88 10.43-1.1 2.13-2.14 4.14-2.72 6.17-1.02 3.58-.62 7.53 1.11 10.83.74 1.42 1.75 2.8 2.83 4.27 1.78 2.43 3.62 4.93 4.67 8.13 2.63 7.95-1.47 17.27-9.13 20.73" fill="#03a9f4" /><path d="m10.51 123.31-4.73-6.45C36.11 94.64 39.34 62.1 37.2 45.52l6.04-1.85c2.37 18.33.91 55-32.73 79.64" fill="#f48fb1" /><path d="m94.92 73.36.53.41c-.06-3.29.1-6.6.41-9.88-2.68-2.23-5.18-4.62-6.98-7.42-.05-.08-.09-.16-.14-.24-.54 3.6-.96 7.28-1.16 10.99 2.39 2.29 4.95 4.29 7.34 6.14" fill="#0076c6" /><path d="m114.93 95.35-7.26-3.37c1.85-3.98.3-8.79-1.76-11.96-2.68-4.12-6.9-7.4-10.99-10.57-4.39-3.4-9.36-7.25-12.78-12.58-6.29-9.79-5.18-21.98 1.91-31.21l5.81 3.25c-5.1 6.65-5.51 16.58-.99 23.63 2.67 4.17 6.88 7.42 10.95 10.58 4.4 3.41 9.38 7.27 12.8 12.53 4.12 6.35 5.01 13.9 2.31 19.7M8.99 92.59c-1.5-8.48 4.7-12.87 8.03-15.23.4-.28.89-.63 1.23-.9-.03-.71-.51-1.6-1.41-3.11-1.48-2.49-3.5-5.91-1.95-10.26 1.35-3.78 5.27-5.03 7.87-6.49 2.22-1.25 3.83-2.77 4.63-5.31.93-2.96.28-10.4.28-10.4l4.88-2.85s1.54 7.11 1.54 10.73C34.09 59.03 28.4 61.65 26 63c-1.66.93-3.23 1.81-3.57 2.77-.25.7.1 1.49 1.3 3.51 1.44 2.42 3.4 5.75 2.12 10-.62 2.07-2.36 3.31-4.2 4.61-3.26 2.31-5.36 4.07-4.78 7.31zm66.06-10.33c-3.56-.85-5.99-2.97-8.17-4.77l5.1-6.17s1.81 2.69 5.78 3.93zm-6.42-45.02-5.91-3.47L67 27l5.92 3.47zm15.34 76.32L76 108.61l6.15-6.84 6.15 5.84z" fill="#f44336" /><path fill="#fb8c00" d="m109.207 60.167 4.69-6.481 6.96 5.036-4.691 6.481z" /><path fill="#f44336" d="m52.89 57.06-7.06-4.88 3.67-4.87 7.05 4.88z" /><path d="M61.43 65.59s1.36-.05 3.05.28c1.22-2.4 2.38-4.9 2.98-7.71-2.08-.47-3.75-.24-3.75-.24z" fill="#0076c6" /><path d="M70.92 66.53c-2.79-2.38-7.45-2.21-7.45-2.21l2.27-7.67s5.16-.72 8.64 2.91zM4.641 98.305l7.256-.443.487 7.985-7.256.443zM43.17 96.91l-4.61-6.54c2.04-1.44 3.91-3.15 5.53-5.06l6.1 5.18a38.2 38.2 0 0 1-7.02 6.42" fill="#fb8c00" /><path d="M43.23 115.39c-2.4-1.98-4.94-3.82-7.56-5.48l4.28-6.76c2.9 1.83 5.71 3.87 8.37 6.06z" fill="#f44336" /><path d="M87.85 80.09c.28 3.31.67 5.69 1.41 8.79l5.27-4.23-5.13-6.41z" fill="#0076c6" /><path fill="#ffc107" d="m79.37 85.194 8.06-6.461 5.004 6.241-8.06 6.462z" /><path d="M76.62 125.26c-1.4-2.57-2.97-5.08-4.67-7.46l6.51-4.65a79 79 0 0 1 5.18 8.29z" fill="#fb8c00" /></svg>
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    10 Nov
                  </Typography>
                  <Button variant="contained" size='small' >
                    Wish
                  </Button>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={"s"} className='text-white bg-' />
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Sandeep Singh</Typography>} secondary="HR Executive" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="h6" noWrap display={"flex"} alignItems={"center"} gap={1}>
                    New Joinee <svg width="16" height="16" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="iconify iconify--noto"><path d="m36.46 36.81-14.14-9.06a2.213 2.213 0 0 1-.41-3.45l5.31-5.31c1.02-1.02 2.74-.8 3.47.45l8.84 14.37c1.16 1.98-1.11 4.2-3.07 3M24.1 80.39l-16.42.33a2.21 2.21 0 0 0-2.09 2.77l1.91 7.26c.37 1.4 1.96 2.07 3.22 1.37l14.51-7.59c2-1.13 1.17-4.19-1.13-4.14m38.14 27.89-3.6 15.99c-.33 1.39.72 2.73 2.15 2.73h7.51c1.45 0 2.5-1.37 2.14-2.77l-3.91-15.99c-.58-2.23-3.75-2.2-4.29.04m29.3-71.47 14.14-9.06c1.22-.75 1.42-2.44.41-3.45l-5.31-5.31a2.212 2.212 0 0 0-3.47.45l-8.84 14.37c-1.16 1.98 1.11 4.2 3.07 3m12.36 43.58 16.42.33a2.21 2.21 0 0 1 2.09 2.77l-1.91 7.26a2.217 2.217 0 0 1-3.22 1.37l-14.51-7.59c-2-1.13-1.17-4.19 1.13-4.14" fill="#ffc107" /><path d="m68.05 7.23 13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01" fill="#fdd835" /><path d="m67.07 39.77-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42 1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68-2.86 1.6-7.08.35-7.73-6.13" fill="#ffff8d" /><path d="M95.28 71.51 114.9 56.2c.97-.81 2.72-2.1 1.32-3.57-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69-.39 4.4 3.56 7.79 9.16 3.97" fill="#f4b400" /></svg>
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    19 Nov
                  </Typography>
                  <Button variant="contained" size='small' >
                    Wish
                  </Button>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
      </Grid>
      {/* Gallery */}
      <Grid item xs={12} md={4} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Gallery</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box justifyContent={"space-evenly"} sx={{ pt: 2 }}>
            <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, pt: 0 }}>
              <Typography variant="h6" gutterBottom>{imagesName[activeStep]}</Typography>
              <img src={images[activeStep]} alt="gallery1" />
            </Box>
            <MobileStepper
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <CaretLeftFilled />
                  ) : (
                    <CaretRightFilled />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <CaretRightFilled />
                  ) : (
                    <CaretLeftFilled />
                  )}
                  Back
                </Button>
              }
            />

          </Box>
        </MainCard>
      </Grid>
      {/* Upcoming Holidays */}
      <Grid item xs={12} md={4} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item display={"flex"} width={"100%"} justifyContent={"space-between"}>
            <Typography variant="h5">Upcoming Holidays</Typography>
            <Button variant='outlined' size='small' onClick={handleClickOpen}>View All</Button>
          </Grid>
          <Grid item />
        </Grid>
        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle fontSize={"20px"}>Upcoming Holidays</DialogTitle>
          <DialogContent className='h-full' sx={{ maxHeight: "none" }}>
            <Box sx={{ width: '100%', height: '100%', p: 2, }} display={"flex"} flexWrap={"wrap"} gap={4}>

              <TextField label="Name" ></TextField>
              <TextField label="Error Input Field" error={true} helperText="Invalid entry"></TextField>
              <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
              <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
                renderInput={(params) => (
                  <TextField {...params} label="Multiple limit tags" placeholder="Favorites" />
                )}
                sx={{ width: '300px' }}
              />
            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <MainCard sx={{ mt: 1.2, pb: 2.7 }} content={false}>
          <Stack spacing={2}>
            <List
              component="nav"
              sx={{
                px: 0,
                py: 0,
                '& .MuiListItemButton-root': {
                  py: 0.5,
                  '& .MuiAvatar-root': avatarSX,
                  '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                }
              }}
            >
              <ListItemButton divider>
                <ListItemText primary={<Typography variant="subtitle1">Guru Nanak Jayanti</Typography>} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="h6" noWrap>
                      15 Nov
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      Friday
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary={<Typography variant="subtitle1">Christmas</Typography>} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="h6" noWrap>
                      25 Dec
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      Wednesday
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary={<Typography variant="subtitle1">New Year</Typography>} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="h6" noWrap>
                      1 January
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      Wednesday
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
              <ListItemButton divider>
                <ListItemText primary={<Typography variant="subtitle1">Lohri</Typography>} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="h6" noWrap>
                      13 January
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      Monday
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary={<Typography variant="subtitle1">Republic </Typography>} />
                <ListItemSecondaryAction>
                  <Stack alignItems="flex-end">
                    <Typography variant="h6" noWrap>
                      26 January
                    </Typography>
                    <Typography variant="h6" color="secondary" noWrap>
                      Saturday
                    </Typography>
                  </Stack>
                </ListItemSecondaryAction>
              </ListItemButton>
            </List>
          </Stack>

        </MainCard>
      </Grid>
      {/* Team Attendance */}
      {
        isAdmin && (

          <Grid item xs={12} md={4} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item className='flex w-full' justifyContent="space-between">

                <Typography variant="h5">Team Attendance</Typography>
                <TextField
                  id="standard-select-currency"
                  size="small"
                  select
                  value={"today"}
                  // onChange={(e) => setValue(e.target.value)}
                  sx={{ '& .MuiInputBase-input': { py: 0.75, fontSize: '0.875rem' } }}
                >
                  {status.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

              </Grid>
              <Grid item />
            </Grid>
            <MainCard sx={{ mt: 1 }} content={false}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} md={12} lg={12}>

                  <Stack spacing={2}>
                    <ReactApexChart
                      options={chartOptions}
                      series={chartSeries}
                      type="donut"
                      width="100%"
                    />
                  </Stack>
                </Grid>
                {/* <Divider orientation="vertical" flexItem />
                <Grid item xs={12} md={4} lg={4}>
                  <Stack spacing={1} m={0.9}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", border: "1px solid #FFBF00" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>LCR</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#FFBF0090", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        4
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", my: 0.9, border: "1px solid #FFBF00" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>Late Coming</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#FFBF0090", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        0
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", border: "1px solid #1677FF" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>EGR</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#1677FF96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        2
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", border: "1px solid #1677FF" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>Early Going</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#1677FF96", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        1
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", border: "1px solid #877CE9" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>Regularization</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#877CE996", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        0
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", cursor: "pointer", borderRadius: "10px", border: "1px solid #26B56E" }}>
                      <Typography variant="subtitle1" sx={{ p: 1, }}>Correction</Typography>
                      <Typography variant="h6" fontWeight={600} noWrap sx={{ textAlign: "center", width: "40px", backgroundColor: "#26B56E90", p: 1, borderRadius: " 0  9px 9px 0" }}>
                        4
                      </Typography>
                    </Box>
                  </Stack>
                </Grid> */}
              </Grid>
            </MainCard>
          </Grid>
        )
      }
      {/* Leave Summary */}
      {
        isAdmin && (

          <Grid item xs={12} md={4} lg={4}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Leave Summary</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" alignItems="center" spacing={0} gap={1}>

                  <Button
                    size="small"
                    onClick={() => setSlot('week')}
                    color={slot === 'week' ? 'primary' : 'secondary'}
                    variant={slot === 'week' ? 'outlined' : 'outlined'}
                  >
                    Week
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setSlot('month')}
                    color={slot === 'month' ? 'primary' : 'secondary'}
                    variant={slot === 'month' ? 'outlined' : 'outlined'}
                  >
                    Month
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            {slot === "week" ? (

              <MainCard sx={{ mt: 1 }} content={false}>
                <Box sx={{ p: 3, pb: 0 }} width="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>

                  <Stack spacing={2}>
                    <div className='flex items-center gap-2'>
                      <LeftCircleFilled className='text-[#1677FF95] text-lg' />
                      <Typography variant="h6" color="text.secondary">
                        11-Nov-2024 to 18-Nov-2024
                      </Typography>
                      <RightCircleFilled className='text-[#1677FF95] text-lg' />
                    </div>
                  </Stack>
                </Box>
                <MonthlyBarChart />
              </MainCard>

            ) : (

              <MainCard sx={{ mt: 2 }} content={false}>
                <Box sx={{ p: 3, pb: 0 }} width="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Stack spacing={2}>
                    <div className='flex items-center gap-2'>
                      <LeftCircleFilled className='text-[#1677FF95] text-lg' />
                      <Typography variant="h6" color="text.secondary">
                        2024
                      </Typography>
                      <RightCircleFilled className='text-[#1677FF95] text-lg' />
                    </div>
                  </Stack>
                </Box>
                <ReportAreaChart />
              </MainCard>

            )}
          </Grid>

        )
      }
      {/* row 3 */}

      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <SaleReportCard />
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #984947</Typography>} secondary="5 August, 1:45 PM" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid> */}
    </Grid >
  );
}
