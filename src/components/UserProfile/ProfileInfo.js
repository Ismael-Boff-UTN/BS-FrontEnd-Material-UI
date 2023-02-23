import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PedidosTable from "./PedidosTable";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: "20px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", //Arregla Un Error De IE11
    marginTop: theme.spacing(1),
  },
  submit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 20,
    margin: theme.spacing(3, 0, 2),
  },
  nuevaCuenta: {
    marginTop: "30px",
  },
  mainTitle: {
    fontSize: "30px",
    marginTop: "30px",
    justifyContent: "center",
  },
  googleLoginButton: {
    borderRadius: 20,
  },
  logo: {
    marginTop: "100px",
    maxHeight: "200px",
    maxWidth: "200px",
    minHeight: "200px",
    minWidth: "200px",
    alignContent: "center"
  },
}));

const ProfileInfo = ({ usuario }) => {
  const classes = useStyles();
  const [editar, setEditar] = useState(true);
  //const [user, setUser] = useState(usuario);
  const [profileData, setProfileData] = useState();
  const {  uid } = useSelector((state) => state.auth);

  const onEditar = (e,data) => {
    e.preventDefault();
    setEditar(false);
    setProfileData(data)
  };
  const onCancelEdit = (e) => {
    e.preventDefault();
    setEditar(true);
  };


  const onUpdateProfileData = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    

    axios
    .put(
      `http://localhost:4000/api/usuarios/${uid}`,
      profileData,{
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        // Obtenemos los datos

        // setUsuarios(response.data.usuarios);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log(e);
      });

  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid Grid container spacing={2}>
        <Grid Grid item xs={12} sm={6} container justify="center">
          <div>
            <Avatar
              src={usuario.img}
              className={classes.logo}
              alt="fotoPerfil"
              variant="circle"
            />

            <Typography
              component="h1"
              variant="h5"
              className={classes.mainTitle}
            >
              {usuario.nombre + " " + usuario.apellido}
            </Typography>
          </div>
        </Grid>
        <Grid Grid item xs={12} sm={6}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoComplete="email"
              autoFocus
              defaultValue={usuario.email}
              disabled={editar}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="telefono"
              label="Telefono"
              type="number"
              id="telefono"
              defaultValue={usuario.telefono}
              disabled={editar}
            />
            <Typography>Domicilio Fiscal</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="localidad"
              label="Localidad"
              type="text"
              id="localidad"
              defaultValue={usuario.domicilio.localidad}
              disabled={editar}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="calle"
              label="Nombre Calle"
              type="text"
              id="calle"
              defaultValue={usuario.domicilio.calle}
              disabled={editar}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="numero"
              label="Numero Calle"
              type="text"
              id="numeroCalle"
              defaultValue={usuario.domicilio.numero}
              disabled={editar}
            />
            {editar === true ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                size="large"
                //onClick={onEditar(e, data)}
              >
                Editar
              </Button>
            ) : (
              <>
                <Button
                  type="submit"
                  //fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  size="large"
                  onClick={onCancelEdit}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  //fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  size="large"
                  //onClick={onUpdateProfileData()}
                >
                  Guardar Cambios
                </Button>
              </>
            )}

            <Grid container>
              <Grid item xs></Grid>
              <Grid item className={classes.nuevaCuenta}></Grid>
            </Grid>
            <Box mt={5}></Box>
          </form>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12}>
        <PedidosTable pedidos={usuario.pedidos} />
      </Grid>
    </Grid>
  );
};

export default ProfileInfo;
