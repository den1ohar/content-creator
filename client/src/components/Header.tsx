import React from "react";
import Link from "next/link";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
      display: "block"
    },
    title: {
      display: "none",
      [theme.breakpoints.up("xs")]: {
        display: "block"
      }
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    navMenu: {
      marginTop: "9px"
    }
  })
);
const Header: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [navAnchorEl, setNavAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setNavAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigation = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchorEl(event.currentTarget);
  };
  const handleCloseNavigation = () => {
    setNavAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>English</MenuItem>
      <MenuItem onClick={handleMenuClose}>French</MenuItem>
      <MenuItem onClick={handleMenuClose}>Spanish</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleNavigation}>
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Content Creator App
          </Typography>
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-label="set language"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit">
            <LanguageIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Menu
        id="simple-menu"
        className={classes.navMenu}
        anchorEl={navAnchorEl}
        keepMounted
        open={Boolean(navAnchorEl)}
        onClose={handleCloseNavigation}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Link href="/">
          <a>
            <MenuItem onClick={handleCloseNavigation}>Main</MenuItem>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <MenuItem onClick={handleCloseNavigation}>About</MenuItem>
          </a>
        </Link>
        <Link href="/services">
          <a>
            <MenuItem onClick={handleCloseNavigation}>Services</MenuItem>
          </a>
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
