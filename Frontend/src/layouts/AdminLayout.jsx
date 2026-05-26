import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  Button,
  IconButton,
  Collapse,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Notifications as NotificationsIcon,
  MailOutline as MailOutlineIcon,
  ExpandLess, ExpandMore
} from '@mui/icons-material';

const drawerWidth = 240;

export default function AdminLayout() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItems, setOpenItems] = useState({});

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCollapseClick = (text) => {
    setOpenItems(prev => ({ ...prev, [text]: !prev[text] }));
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/admin/dashboard' },
    { text: 'Students', icon: <SchoolIcon />, path: '/admin/students' },
    { text: 'Faculty', icon: <PeopleIcon />, path: '/admin/faculty' },
    { text: 'Events', icon: <EventIcon />, path: '/admin/events' },
    { text: 'Notifications', icon: <NotificationsIcon />, path: '/admin/notifications' },
    { text: 'Course', icon: <PeopleIcon />, path: '/admin/course' },
    {
      text: 'Forms',
      icon: <SchoolIcon />,
      children: [
        { text: 'Enrollment', icon: <SchoolIcon />, path: '/admin/enroll' },
        { text: 'Contact', icon: <MailOutlineIcon />, path: '/admin/contact' },
      ],
    },
  ];

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <Box key={item.text}>
          <ListItemButton onClick={() => handleCollapseClick(item.text)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {openItems[item.text] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) => (
                <ListItemButton
                  key={child.text}
                  sx={{ pl: 4 }}
                  component={NavLink}
                  to={child.path}
                  onClick={() => isMobile && setMobileOpen(false)}
                >
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText primary={child.text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Box>
      );
    } else {
      return (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            component={NavLink}
            to={item.path}
            onClick={() => isMobile && setMobileOpen(false)}
            sx={{
              '&.active': {
                backgroundColor: '#e3f2fd',
                borderLeft: '4px solid #1976d2',
                color: '#1976d2',
              },
              '&:hover': {
                backgroundColor: '#f0f4f8',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      );
    }
  };

  const drawerContent = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Faran Academy
      </Typography>
      <List>
        {menuItems.map(renderMenuItem)}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Top AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(90deg, #265787ff, #23659cff)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap fontWeight="bold">
            Admin Panel
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar for desktop */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#f5f7fa',
              borderRight: '1px solid #ddd',
            },
          }}
        >
          <Toolbar />
          {drawerContent}
        </Drawer>
      )}

      {/* Sidebar for mobile */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#f5f7fa',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#fafafa',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
