import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider/Divider";

import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

import { quitarArticuloCart } from "../../actions/cart";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  precio: {
    marginRight: "75px",
  },
}));

export default function ReviewOrder() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  

  //Items Totales Del Carrito
  var total = 0;

  cart.forEach((item) => {
    total += item.precioVenta;
  });

  const quitarArticulo = (id) =>{
    dispatch(quitarArticuloCart(id));
  }

  return (
    <>
    <Grid>
      <Typography variant="h6" gutterBottom>
        Productos En Carrito
      </Typography>
      <List disablePadding>
        {cart.length <= 0 ? (
          <Typography>Sin Articulos Agregados</Typography>
        ) : (
          cart.map((item) => (
            <>
              <ListItem className={classes.listItem} key={item._id}>
                <ListItemAvatar>
                  <Avatar src={item.imagen} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.denominacion}
                  secondary={item.categoria}
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={() => quitarArticulo(item._id)}>
                    <CancelIcon />
                  </IconButton>
                </ListItemSecondaryAction>
                
                <ListItemSecondaryAction className={classes.precio}>
                  <Typography variant="body2" edge="start">
                    $ {item.precioVenta}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </>
          ))
        )}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      </Grid>
    </>
  );
}
