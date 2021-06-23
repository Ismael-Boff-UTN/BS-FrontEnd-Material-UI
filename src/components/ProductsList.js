import React from "react";
//Mis Componentes
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Product from "./Products/Product";
import Footer from "./Footer/Footer";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
//Redux
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "50.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export const ProductsList = () => {
  const articulos = useSelector((state) => state.article.articulos);
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Header />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {articulos.map((art) => (
            <Grid item key={art._id} xs={12} sm={6} md={4}>
              <Product key={art._id} product={art} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
