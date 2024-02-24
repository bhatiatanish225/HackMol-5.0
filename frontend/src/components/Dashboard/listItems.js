import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentsIcon from '@mui/icons-material/Payments';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PaymentsIcon/>
      </ListItemIcon>
      <ListItemText primary="Make Payment" >
      </ListItemText>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SsidChartIcon/>
      </ListItemIcon>
      <ListItemText primary="Investments" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HistoryIcon/>
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon/>
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon/>
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  </React.Fragment>
);