import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer as MuiDrawer,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Select,
  MenuItem,
  IconButton,
  List,
  ListItemText 
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  AddCircle,
  AccountCircle,
  Dashboard,
  FeaturedPlayList,
  Category,
  PersonAdd,
} from "@mui/icons-material";
import './Sidebar.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",

  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#00838d",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 0.8),
  color: "#fff",
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }) {
  const [selectedYear, setSelectedYear] = useState("Semester");
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home"); // Default to Home

  useEffect(() => {
    // Update currentPage state when a new route is navigated to
    setCurrentPage(window.location.pathname);
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedYear(selectedValue);
    const routes = {
      first: '/firstyear',
      second: '/secondyear',
      third: '/thirdyear',
    };
    const selectedRoute = routes[selectedValue];
    if (selectedRoute) {
      navigate(selectedRoute);
      setCurrentPage(selectedRoute); // Update currentPage
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (route) => {
    navigate(route);
    setCurrentPage(route);
    handleDrawerClose(); // Close the drawer after navigation
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {open === false ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ ...(open && { display: "none" }) }}
              >
                <Menu />
              </IconButton>
            ) : (
              <IconButton>
                {theme.direction === "rtl" ? (
                  <ChevronRight />
                ) : (
                  <ChevronLeft
                    onClick={handleDrawerClose}
                    sx={{ color: "#fff" }}
                  />
                )}
              </IconButton>
            )}
          </DrawerHeader>

          <List sx={{ margin: "0", padding: "0" }}>
            {[
              { text: "Home", route: "/home", icon: AccountCircle },
              { text: "About US", route: "/about", icon: Dashboard },
              { text: "Semester", route: "/semester", icon: AddCircle },
              { text: "Our Staff", route: "/staff", icon: FeaturedPlayList },
              { text: "Students", route: "/students", icon: FeaturedPlayList },
              { text: "Departmentclub", route: "/club", icon: Category },
              { text: "Practical Lab", route: "/practicallab", icon: PersonAdd },
              { text: "Gallery", route: "/gallery", icon: PersonAdd },
              // { text: "Logout", route: "/", icon: PersonAdd },
            ].map(({ text, route, icon: Icon, dropdown }, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  color: "#fff",
                  height: "76px",
                  backgroundColor: "#00838d",
                }}
              >
                <ListItemButton
                  onClick={() => handleNavigation(route)}
                  sx={{
                    minHeight: 50,
                    justifyContent: "center",
                    px: 2.5,
                    backgroundColor: "#00838d",
                    ":hover": {
                      bgcolor: "#AF5",
                      color: "green",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      style={{
                        color: currentPage === route ? "red" : "#fff",
                      }}
                    />
                  </ListItemIcon>
                  {dropdown && (
                    <Select
                      value={selectedYear}
                      onChange={handleChange}
                      variant="standard"
                      style={{
                        color: "#fff",
                        borderBottom: "none",
                        marginLeft: "20px",
                      }}
                    >
                      <MenuItem value="Semester" disabled>
                        Semester
                      </MenuItem>
                      <MenuItem value="first">First Year</MenuItem>
                      <MenuItem value="second">Second Year</MenuItem>
                      <MenuItem value="third">Third Year</MenuItem>
                    </Select>
                  )}
                  {!dropdown && (
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </>
  );
}
