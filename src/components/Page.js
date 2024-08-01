import { useState, useEffect, useRef, useContext } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from "prop-types";
// MUI
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
// Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentIcon from '@mui/icons-material/Payment';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import TVIcon from "./TVIcon";
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
// Hooks
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { GlobalContext } from "../App";

const drawerWidth = 240;

function Page(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { window, addPlaylistMenu } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchFieldRef = useRef(null);

  const {
    playlistData,
    selectedPlaylistName,
    setSelectedPlaylistName,
    setSelectedCategoryName,
    searchBarOpen,
    setSearchBarOpen,
    searchTerm,
    setSearchTerm,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (
      localStorage.getItem("selectedPlaylistName") === null ||
      localStorage.getItem("selectedPlaylistName") === ""
    ) {
      if (playlistData.length > 0)
        setSelectedPlaylistName(playlistData[0]?.name);
    }
    // eslint-disable-next-line
  }, [playlistData]);

  useEffect(() => {
    if (searchFieldRef.current) {
      searchFieldRef.current.value = searchTerm;
    }
  }, [searchTerm]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSearchBarOpen = () => {
    setSearchBarOpen(true);
  };
  const handleSearchBarClose = () => {
    setSearchBarOpen(false);
    if (searchFieldRef.current) {
      setSearchTerm("");
    }
  };
  const handleSearchFieldClear = () => {
    if (searchFieldRef.current) {
      searchFieldRef.current.value = "";
      setSearchTerm("");
      searchFieldRef.current.focus();
    }
  };
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const drawer = (
    <div>
      <List>
        <ListItem disablePadding>
          <ListItemButton style={{ backgroundColor: '#33c4b6', marginTop: "-8px", color: "white", fontWeight: "800", paddingTop: "15px",paddingBottom:"15px", paddingLeft:"18px" }}>
            <ListItemIcon>
              <TVIcon />
            </ListItemIcon>
            <ListItemText primary="Ankit IPTV" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleDrawerToggle();
              pathname !== "/home" && navigate("/home");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleDrawerToggle();
              pathname !== "/settings" && navigate("/settings");
            }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              handleDrawerToggle();
              pathname !== "/plans" && navigate("/plans");
            }}
          >
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Plans" />
          </ListItemButton>
        </ListItem>
      </List>
      <ListItem disablePadding>
        <ListItemButton 
          onClick={() => {
            navigate("/");
            localStorage.clear();
          }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary=" Sign Out" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <Box
        sx={{
          mx: (theme) => theme.spacing(1),
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="overline">Playlists</Typography>
        <Button
          size="small"
          startIcon={<EditIcon />}
          onClick={() => {
            handleDrawerToggle();
            pathname !== "/playlists" && navigate("/playlists");
          }}
        >
          Manage
        </Button>
      </Box>
      <List>
        {playlistData?.map((playlistNameObj, playlistIndex) => (
          <ListItem disablePadding key={playlistIndex}>
            <ListItemButton
              selected={
                playlistNameObj?.name ===
                localStorage.getItem("selectedPlaylistName")
              }
              onClick={() => {
                handleDrawerToggle();
                setSelectedPlaylistName(playlistNameObj?.name);
                setSelectedCategoryName("All channels");
                localStorage.setItem(
                  "selectedPlaylistName",
                  playlistNameObj?.name
                );
                pathname !== "/home" && navigate("/home");
              }}
            >
              <ListItemIcon>
                <PlaylistPlayIcon />
              </ListItemIcon>
              <ListItemText
                sx={{
                  "& span": {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                }}
                primary={playlistNameObj?.name}
                secondary={`${playlistNameObj?.count} channels`}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider/>
         <ListItem disablePadding>
        <ListItemButton 
          onClick={() => {
            handleDrawerToggle();
            pathname !== "/contactus" && navigate("/contactus");
          }}>
          <ListItemIcon>
            <ContactMailIcon/>
          </ListItemIcon>
          <ListItemText primary="Contact US" />
        </ListItemButton>
      </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="theme-color"
          content={theme.palette.mode === "light" ? "primary.main" : "#282424"}
        />
      </Helmet>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { xxl: `calc(100% - ${drawerWidth}px)` },
            ml: { xxl: `${drawerWidth}px` },
          }}
        >
          {pathname === "/" && (searchBarOpen || searchTerm) ? (
            <Toolbar>
              <Paper
                elevation={0}
                component="form"
                // Disable form submit
                onSubmit={(e) => e.preventDefault()}
                sx={{
                  mx: -2,
                  p: "2px 4px",
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  bgcolor:
                    theme.palette.mode === "light" ? "primary.main" : "#282424",
                  color: "#fff",
                }}
              >
                <IconButton
                  color="inherit"
                  sx={{ p: "10px" }}
                  aria-label="hide search field"
                  onClick={handleSearchBarClose}
                >
                  <ArrowBackIcon />
                </IconButton>
                <InputBase
                  inputRef={searchFieldRef}
                  autoFocus
                  sx={{ flex: 1, color: "inherit" }}
                  placeholder="Search for channels"
                  inputProps={{ "aria-label": "search for channels" }}
                  onChange={handleSearchTermChange}
                />
                <IconButton
                  color="inherit"
                  sx={{ p: "10px" }}
                  aria-label="clear search field"
                  onClick={handleSearchFieldClear}
                >
                  <ClearIcon />
                </IconButton>
              </Paper>
            </Toolbar>
          ) : (
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { xxl: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                {pathname === "/" && selectedPlaylistName
                  ? selectedPlaylistName
                  : props.title}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {pathname === "/" && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleSearchBarOpen}
                >
                  <SearchIcon />
                </IconButton>
              )}
              {addPlaylistMenu}
            </Toolbar>
          )}
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { xxl: drawerWidth }, flexShrink: { xxl: 0 } }}
          aria-label="menu"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <SwipeableDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", xxl: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                overflowX: "hidden",
              },
            }}
          >
            {drawer}
          </SwipeableDrawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", xxl: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                overflowX: "hidden",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { xxl: `calc(100% - ${drawerWidth}px)` },
            overflowX: "hidden",
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
      </Box>
    </HelmetProvider>
  );
}

Page.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Page;
