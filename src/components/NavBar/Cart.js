import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip/Chip";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Divider from "@material-ui/core/Divider";

//

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CancelIcon from "@material-ui/icons/Cancel";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const cart = useSelector((state) => state.cart.cart);

  //Items Totales Del Carrito
  var total = 0;

  cart.forEach((item) => {
    total += item.articulo.precioVenta;
  });

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
        &nbsp;Carrito
        <Badge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
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
          Carrito De Compras
        </DialogTitle>
        <DialogContent dividers>
          {(cart.length === 0) | null ? (
            <Typography>Sin Articulos</Typography>
          ) : (
            <List>
              {cart.map((item) => (
                <>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={item.articulo.imagen} />
                    </ListItemAvatar>
                    <ListItemText primary={item.articulo.denominacion} />
                    &nbsp;&nbsp;
                    <Chip
                      label={"$ " + item.articulo.precioVenta}
                      style={{ backgroundColor: "green", color: "white" }}
                    />
                    &nbsp;&nbsp;
                    <Chip
                      label="X 1"
                      style={{ backgroundColor: "green", color: "white" }}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <CancelIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Divider />
                </>
              ))}
              <ListItem>
                <ListItemAvatar>
                  <LocalMallIcon />
                </ListItemAvatar>
                <ListItemText primary="TOTAL : " />
                &nbsp;&nbsp;
                <Chip
                  label={"$ " + total}
                  style={{ backgroundColor: "green", color: "white" }}
                />
              </ListItem>
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="secondary"
            variant="contained"
          >
            CheckOut
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
            variant="contained"
          >
            Seguir Comprando!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
