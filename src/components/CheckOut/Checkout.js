import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "./PagosForm";
import Resumen from "./ResumenCompra";
import Review from "./ReviewOrder";
import axios from "axios";
import swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 20,
    color: "white",
  },
}));

const steps = ["Estado De La Orden", "Detalles De Pago", "Resumen"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Review />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Resumen/>
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const token = localStorage.getItem("token");
  const cart = useSelector((state) => state.cart);
  const usuario = useSelector((state) => state.auth.resto);
  var num="12345";
  const dispatch = useDispatch();


  const handleNext = (e) => {
    if(activeStep === steps.length - 1){
      if (cart.tipoPago=="Efectivo"){
        axios
        .put(`http://localhost:4000/api/usuarios/addPedidoUsuario/${usuario.uid}`, cart, {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          //console.log(res);
          num=res.data.numero;
          swal.fire("", `${res.data.msg}`, "success");
        })
        .catch((e) => {
          console.log(e);
        });
      } else if(cart.tipoPago=="MercadoPago"){
        axios
        .post(`http://localhost:4000/api/pagomp`, cart, {
          headers: {
            "x-token": token,
          },
        })
        .then((res) => {
          //console.log(res);
          num=res.data.numero;
          swal.fire("", `${res.data.msg}`, "success");
          axios
          .put(`http://localhost:4000/api/usuarios/addPedidoUsuario/${usuario.uid}`, cart, {
            headers: {
              "x-token": token,
            },
          })
          .then((res) => {
            //console.log(res);
            num=res.data.numero;
            swal.fire("", `${res.data.msg}`, "success");
          })
          .catch((e) => {
            console.log(e);
          });
        })
        .catch((e) => {
          console.log(e);
        });
      }

    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />

      <Paper className={classes.paper}>
        <Stepper
          activeStep={activeStep}
          className={classes.stepper}
          nonLinear
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias Por Su Compra!
              </Typography>
              <Typography variant="subtitle1">
                Su Numero De Orden Es #{num}, Se Ha Enviado Un E-Mail Con
                Detalles De Su Compra.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Volver
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Finalizar Compra"
                    : "Siguiente"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </>
  );
}
