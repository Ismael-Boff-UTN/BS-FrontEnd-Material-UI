import React , { useEffect, useState } from "react";
//Mis Componentes
import axios from "axios";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Product from "./Products/Product";
import Footer from "./Footer/Footer";
import Categorias from './Header/Categorias';
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
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
    backgroundColor: '#FFF7E8',
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
    backgroundColor: '#FFF7E8',
    padding: theme.spacing(6),
  },
  back:{
    backgroundColor: '#FFF7E8',
  },
  heroTextSecondary: {
    backgroundColor: '#FFF7E8',
    borderRadius: "10px",
  },
}));

export const ProductsList = () => {
  const articulos = useSelector((state) => state.articles.articles);
  const [artiAux, setArtiAux] = useState(articulos || []);
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [catAux, setCatAux] = useState("");


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


  useEffect(() => {
    setArtiAux([]);
    if(catAux==""){
      setArtiAux(articulos);
    }else{
      var aux=[];
      articulos.forEach(art => {
        if(art.categoria == catAux){
          aux.push(art)
          setArtiAux([...aux]);
        }
      })
    }
  }, [catAux]);

  const cambioDeCat=(e)=>{
     setCatAux(e.target.value)
  }

  //horario de atencion
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    //por temas de practicidad se ha cambiado el horario de las variables de abajo, cuando se quiera usar cambiarse
    const startTime = new Date("2023-02-12T01:00:00");
    const endTime = new Date("2023-02-12T23:00:00");
    //por temas de practicidad se ha cambiado el horario de las variables de abajo, cuando se quiera usar cambiarse
    const startTimeFinDeSemana = new Date("2023-02-12T01:00:00");
    const endTimeFinDeSemana = new Date("2023-02-12T23:00:00");
    
    if(currentTime.getDay()==0  || currentTime.getDay()==6){
      if (currentTime.getHours() >= startTimeFinDeSemana.getHours() && currentTime.getHours() <= endTimeFinDeSemana.getHours()) {
        setShowContent(true);
      }
    }

    if (currentTime.getHours() >= startTime.getHours() && currentTime.getHours() <= endTime.getHours()) {
      setShowContent(true);
    }

  }, []);

  function horarioAtencion(){
    if(showContent==true){
      return <Grid container spacing={4}>
        {artiAux.map((art) => (
          <Grid item key={art._id} xs={12} sm={6} md={4}>
            <Product key={art._id} product={art}/>
          </Grid>
        ))}
      </Grid>
    } else{
      return<Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.heroTextSecondary}
          >
            Gracias por su visita<br/>
            Por el momento se encuentra en un horario fuera de atencion<br/>
            Nuestro horarios son:<br/>
            Lunes a domingo<br/>
            20:00 a 00:00<br/>
            Sabado y domingo<br/>
            11:00 a 15:00


          </Typography>

    }
  }

  return (
    <Container className={classes.back}>
      <NavBar />
      <Header />
      <Categorias/>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        <Select
          labelId="fil"
          id="fil"
          label=""
          variant="outlined"
          onChange={cambioDeCat}
          name="fil"
          fullWidth
        >
          <MenuItem value={""} disabled>CATEGORIAS</MenuItem>
          <MenuItem value={""}>TODOS</MenuItem>
          {categorias?.map((cat) => (
            <MenuItem value={cat.nombre}>{cat.nombre}</MenuItem>
          ))}
        </Select>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md">
        {horarioAtencion()}
      </Container>
      <Footer />
    </Container>
  );
};
