import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: 'rgba(255, 248, 232, 1)'
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.dark,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  imageItem: {
    borderRadius: 30,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function SingleLineImageList() {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categorias")
      .then((response) => {
        // Obtenemos los datos
        setCategorias(response.data.categorias);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography
            component="h2"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.heroText}
          >
            Nuestras Categorias
          </Typography>
      <ImageList className={classes.imageList} cols={2.5}>
        {categorias.map((categoria) => (
          <ImageListItem key={categoria._id}>
            <img src={categoria.img} alt={categoria.nombre} />
            <ImageListItemBar
              title={categoria.nombre}

            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
