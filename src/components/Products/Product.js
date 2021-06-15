import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
  },
  cardContent: {
    flexGrow: 1,
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
        <CardMedia
          className={classes.cardMedia}
          image={product.imagen}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.denominacion}
          </Typography>
          <Typography>
            Precio : ${product.precioVenta}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={()=> handleAddItemToCart(product._id)}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
