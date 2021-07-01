import React from "react";
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
//Redux
import { useDispatch } from "react-redux";
import { obtenerArticulo } from "../../actions/cart";

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
