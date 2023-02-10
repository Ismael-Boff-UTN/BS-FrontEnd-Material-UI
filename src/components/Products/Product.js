import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Chip from "@material-ui/core/Chip/Chip";
import {Modal} from  "@material-ui/core";
//Redux
import { useDispatch } from "react-redux";
import { obtenerArticulo } from "../../actions/cart";
//cart
import Grid from "@material-ui/core/Grid";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "80.25%", // 16:9
    borderRadius: "10px",
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonStyles: {
    borderRadius: "20px",
    background: "#f52f41",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
}));

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleAddItemToCart = (id) => {
    dispatch(obtenerArticulo(id));
  };

  //detalle producto
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function verIng(){
    return <Grid> {product.articuluManufacturadoDetalle?.map((ing) => (<p>{ing.ingredient.denominacion} {ing.cantidad}</p>))}</Grid>
  }

  const body=(
    <div>
      <div aling="center">
        <h2>
          {product.denominacion}
        </h2>
      </div>
      <CardMedia
          className={classes.cardMedia}
          image={product.imagen}
          title="Image title"
      />
      {verIng()}
      {product.precioVenta}
    </div>
  )

  function mod(){
    return <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Open form dialog
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </div>
  }

  return (
    
    <>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              variant="rounded"
              className={classes.avatar}
            ></Avatar>
          }
          title={product.denominacion}
          
          subheader={product.tiempoEstimadoCocina > 0 ? `Tiempo Preparación : ${product.tiempoEstimadoCocina} min.` : ""}
        />
        <CardMedia
          className={classes.cardMedia}
          image={product.imagen}
          title="Image title"
        />
        <CardContent className={classes.cardContent}></CardContent>
            <Button className={classes.buttonStyles} size="medium" color="primary" variant="contained" onClick={handleClickOpen}>
              Detalle
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>{product.denominacion}</DialogTitle>
              <DialogContent>
              <CardMedia
                className={classes.cardMedia}
                image={product.imagen}
                title="Image title"
              />
                <DialogContentText>
                Ingredientes:
                {verIng()}
                Precio: {product.precioVenta}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
              </DialogActions>
            </Dialog>
        <CardActions>
          <Button
            className={classes.buttonStyles}
            size="medium"
            color="primary"
            variant="contained"
            onClick={() => handleAddItemToCart(product._id)}
          >
            <AddShoppingCartIcon /> &nbsp;&nbsp; Comprar
          </Button>

          <Chip
            variant="outlined"
            color="secondary"
            icon={<MonetizationOnIcon />}
            label={"Precio : " + product.precioVenta}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
