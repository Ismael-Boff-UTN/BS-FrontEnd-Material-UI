import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
//import { GoogleLogin } from "react-google-login";
import { startLogin, startLoginGoogle } from "../../actions/auth";
import swal from "sweetalert2";
import { GoogleLogin } from '@react-oauth/google';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Program1.h - {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    fontFamily: "Dancing Script",
    fontSize: "30px",
  },
  googleLoginButton: {
    borderRadius: 20,
  },
  logo :{
     maxHeight : "130px",
     maxWidth : "130px"
  }
}));

const LogInMaterial = () => {
  const classes = useStyles();
  
  //Login de google
  const responseGoogle = (response) => {
    console.log(response);

    var id_token = response.credential;

    dispatch(startLoginGoogle(id_token));
  };

  //const actualYear = new Date().getFullYear();
  const dispatch = useDispatch();

  const [formValues, setFromValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handleInputChange = ({ target }) => {
    setFromValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return swal.fire("", "Complete Los Campos!", "warning");
    }

    dispatch(startLogin(email, password));
  };


  const clientId= "804016986665-4o6pdrstb389q0s03tn5k523qut440g4.apps.googleusercontent.com";
  const onSuccess =(res)=>{
    console.log("login success");
    console.log(res)
  }
  const onFailure =(res)=>{
    console.log("login fail",res);
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src="https://res.cloudinary.com/program1/image/upload/v1624992467/BuenSabor/Assets/777c9249-63be-4a02-be91-904374dce751_kyuh51.jpg" className={classes.logo} alt="logito"/>

          <Typography component="h1" variant="h5" className={classes.mainTitle}>
            Bienvenido Al Buen Sabor!
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmitForm}>
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
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              size="large"
            >
              Iniciar Sesión
            </Button>
            <GoogleLogin
              clientId="804016986665-4o6pdrstb389q0s03tn5k523qut440g4.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  fullWidth
                  size="large"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={
                    <Avatar src="https://res.cloudinary.com/program1/image/upload/v1624991522/BuenSabor/Assets/descarga_b7oyow.png" />
                  }
                  className={classes.googleLoginButton}
                >
                  Iniciar Sesión Con Google
                </Button>
              )}
              buttonText="Iniciar Sesión Con Google"
              onSuccess={responseGoogle}
              isSignedIn={true}
              onFailure={responseGoogle}
            />
            <Grid container>
              <Grid item xs></Grid>
              <Grid item className={classes.nuevaCuenta}>
                <Link
                  component={LinkRouter}
                  to="/new-user"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  Aun No Tienes Cuenta? Registrate Aqui!
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LogInMaterial;
