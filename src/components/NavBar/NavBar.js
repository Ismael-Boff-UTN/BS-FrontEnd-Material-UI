import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { GoogleLogout } from "react-google-login";

import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  mainTitle: {
    fontFamily: "Dancing Script",
    fontSize: "30px",
  },

  avatarIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const { nombre, img, google } = useSelector((state) => state.auth.resto);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  //Menu Perfil Usuario
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <AccountCircleOutlinedIcon />
        &nbsp;&nbsp;Perfil
      </MenuItem>
      {google === true ? (
        <GoogleLogout
          clientId="1068418280364-qlcmg4k58169if3h5jis6plnfmvml8e8.apps.googleusercontent.com"
          render={(renderProps) => (
            <MenuItem
              type="button"
              className="btn dropdown-item"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <ExitToAppIcon />
              &nbsp;&nbsp;Cerrar Sesión
            </MenuItem>
          )}
          buttonText="Cerrar Sesión"
          onLogoutSuccess={handleLogout}
        ></GoogleLogout>
      ) : (
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon />
          &nbsp;&nbsp;Cerrar Sesión
        </MenuItem>
      )}
    </Menu>
  );

  //Vista Desde Movil
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Cart />
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <Typography variant="h5">{nombre}</Typography>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar alt="Remy Sharp" src={img} className={classes.large} />
          &nbsp;&nbsp;
          <KeyboardArrowDownIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="absolute" style={{ background: "#f52f41" }}>
        <Toolbar>
          <Avatar
            alt="Remy Sharp"
            src="assets/images/logo2.png"
            className={classes.large}
          />
          &nbsp;&nbsp;
          <Typography className={classes.mainTitle} variant="h6" noWrap>
            El Buen Sabor
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem>
              <Cart />
            </MenuItem>

            <IconButton
              edge="start"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar
                alt="Remy Sharp"
                src={img}
                className={classes.avatarIcon}
              />
              &nbsp;{nombre}
              &nbsp;&nbsp;
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
