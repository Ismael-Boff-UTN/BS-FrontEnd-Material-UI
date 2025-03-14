import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Checkout from "../CheckOut/Checkout";
import Grid from "@material-ui/core/Grid";

import { useSelector } from "react-redux";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const cart = useSelector((state) => state.cart.items);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        onClick={handleClickOpen}
        edge="start"
      >
        &nbsp;&nbsp;Carrito
        <Badge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
        &nbsp;&nbsp;
        <KeyboardArrowDownIcon />
      </IconButton>

      <Dialog
        fullWidth="true"
        maxWidth="md"
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        //fullScreen
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Appbar position="absolute" style={{ background: "#f52f41" }}>
            <Toolbar>
              Carrito De Compras
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </Appbar>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Checkout />
            </Grid>
          </Grid>
        </DialogContent>
       
      </Dialog>
    </div>
  );
}
