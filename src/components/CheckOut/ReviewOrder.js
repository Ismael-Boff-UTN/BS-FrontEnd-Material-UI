import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

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
}));

export default function ReviewOrder() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.cart);

  //Items Totales Del Carrito
  var total = 0;

  cart.forEach((item) => {
    total += item.articulo.precioVenta;
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Productos En Carrito
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem className={classes.listItem} key={item.articulo._id}>
            <ListItemAvatar>
              <Avatar src={item.articulo.imagen} />
            </ListItemAvatar>
            <ListItemText
              primary={item.articulo.denominacion}
              secondary="secondary text"
            />
            <Typography variant="body2">
              $ {item.articulo.precioVenta}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </React.Fragment>
  );
}
