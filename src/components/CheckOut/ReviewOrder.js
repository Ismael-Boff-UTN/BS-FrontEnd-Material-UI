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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

import { addExtra, quitarArticuloCart, restaExtra} from "../../actions/cart";

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
    marginRight: "130px",
  },
}));

export default function ReviewOrder() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  

  //Items Totales Del Carrito
  var total = 0;

  cart.forEach((item) => {
    console.log(cart)
    total += item.precioUnitario*item.cantidad;;
  });

  const quitarArticulo = (id) =>{
    dispatch(quitarArticuloCart(id));
  }

  const agregarMismoArt = (id) =>{
    dispatch(addExtra(id));
  }

  const restarMismoArt = (id) =>{
    dispatch(restaExtra(id));
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
              <ListItem className={classes.listItem} key={item._id} >
                <ListItemAvatar>
                  <Avatar src={item.articulo.imagen} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.articulo.denominacion}
                  secondary={item.cantidad}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="add" aria-label="add" onClick={() => agregarMismoArt(item.articulo._id)}>
                  <AddIcon />
                  </IconButton>

                  <IconButton edge="rest" aria-label="rest" onClick={() => restarMismoArt(item.articulo._id)}>
                    <RemoveIcon />
                  </IconButton>

                  <IconButton edge="end" aria-label="delete" onClick={() => quitarArticulo(item.articulo._id)}>
                    <CancelIcon />
                  </IconButton>
                </ListItemSecondaryAction>

                
                <ListItemSecondaryAction className={classes.precio}>
                  <Typography variant="body2" edge="start">
                    $ {item.precioUnitario}
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
