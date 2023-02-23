import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Chip from "@material-ui/core/Chip/Chip";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
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
  const [ingredientes, setIngredientes] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleAddItemToCart = (id) => {
    dispatch(obtenerArticulo(id));
  };


  useEffect(() => {
    axios
      .get("http://localhost:4000/api/ingredientes")
      .then((response) => {
        // Obtenemos los datos
        setIngredientes(response.data.ingredientes);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, []);

  function siTieneStock() {
    var aux = true;
    product.articuluManufacturadoDetalle.forEach(ing => {
      ingredientes.forEach(allIng => {
        if (ing.ingredient._id == allIng._id) {
          if (allIng.stockActual < allIng.stockMinimo) {
            aux = false;
          }
        }
      })
    })
    if (aux == true) {
      return <Button
        className={classes.buttonStyles}
        size="medium"
        color="primary"
        variant="contained"
        onClick={() => handleAddItemToCart(product._id)}
      >
        <AddShoppingCartIcon /> &nbsp;&nbsp; Comprar
      </Button>
    } else {
      return <Button
        className={classes.buttonStyles}
        size="medium"
        color="primary"
        variant="contained"
        //onClick={() => handleAddItemToCart(product._id)}
        disabled
      >
        SIN STOCK
      </Button>
    }
  }

  //detalle producto
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  function verIng() {
    return <Grid> <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >{product.articuluManufacturadoDetalle?.map((ing) => (<ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary={ing.ingredient.denominacion} />
      </ListItemButton>
    </ListItem>))}</List></Grid>
  }

  const body = (
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



  return (

    <>
      <Card className={classes.card}>
        <CardHeader
          avatar={

            <FastfoodIcon />
          }
          title={  <Typography gutterBottom variant="h5" component="div">
          {product.denominacion}
        </Typography>}

          subheader={product.tiempoEstimadoCocina > 0 ? `Tiempo Preparación : ${product.tiempoEstimadoCocina} min.` : ""}
        />
        <CardMedia
          className={classes.cardMedia}
          image={product.imagen}
          title="Image title"
        />
        <CardContent className={classes.cardContent}></CardContent>
        {product.esManufacturado === true ? <Button className={classes.buttonStyles} size="medium" color="primary" variant="contained" onClick={handleClickOpen}>
          Detalle
        </Button> : <></>}

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{product.denominacion}</DialogTitle>
          <DialogContent>
            <CardMedia
              className={classes.cardMedia}
              image={product.imagen}
              title="Image title"
            />
            <DialogContentText>
              <DialogTitle>Ingredientes</DialogTitle>
              {verIng()}
              <Chip
                variant="outlined"
                color="secondary"
                icon={<MonetizationOnIcon />}
                label={"Precio : " + product.precioVenta + " c/u"}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <CardActions>
          {siTieneStock()}

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
