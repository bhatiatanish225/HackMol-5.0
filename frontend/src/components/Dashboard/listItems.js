import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
export const mainListItems = (
  <React.Fragment>
    <Link to='/dashboard'>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <Link to='/payment'>
    <ListItemButton >
      <ListItemIcon>
        <PaymentsIcon/>
      </ListItemIcon>
      <ListItemText primary="Make Payment" >
      </ListItemText>
    </ListItemButton>
    </Link>
    <Link to='/investments'>
    <ListItemButton>
      <ListItemIcon>
        <SsidChartIcon/>
      </ListItemIcon>
      <ListItemText primary="Investments" />
    </ListItemButton>
    </Link>
    <Link to='/history'>
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    </Link>
    <Link to='/profile'>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    </Link>
    <Link to=''>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);