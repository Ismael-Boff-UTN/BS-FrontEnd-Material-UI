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
import Button from "@material-ui/core/Button";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Profile from "../UserProfile/Profile";

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


    //const { nombre, img, google } = useSelector((state) => state.auth.resto);

    //const dispatch = useDispatch();
    //const handleLogout = () => {
    // dispatch(startLogout());
    //};


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


                        <Button

                            size="medium"
                            color="primary"
                            variant="contained"
                            href="/login" 

                        >
                            Iniciar Sesion

                        </Button>
                    </div>
                    <div className={classes.sectionMobile}>
                        <Button
                            //className={classes.buttonStyles}
                            size="medium"
                            color="primary"
                            variant="contained"
                            href="/login"
                        //onClick={() => handleAddItemToCart(product._id)}
                        >
                            Iniciar Sesion

                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
