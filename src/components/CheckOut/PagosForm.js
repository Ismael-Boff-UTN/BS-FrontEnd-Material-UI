import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddressForm from "./DomicilioForm";
import { useSelector, useDispatch } from "react-redux";
import { addTipoPago, addTipoEnvio} from "../../actions/cart";


export default function PagosForm() {
  const [tipoPag, setTipoPag] = React.useState("");
  const [tipoEnvio, setTipoEnvio] = React.useState("");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  function paraEnvio(tipo) {
    console.log(tipo);
    console.log(cart);
    if(tipo=="MercadoPago"){
      return <Grid item xs={12} md={6}>
      <Select
        labelId="Del"
        id="del"
        label=""
        variant="outlined"
        onChange={cambioDeTipoEnv}
        name="a"
        required="true"
        fullWidth
      >
        <MenuItem value={"Retiro"}>Retiro en Local</MenuItem>
        <MenuItem value={"Delivery"}>Delivery</MenuItem>
      </Select>
    </Grid>;
    }else{
      return <Grid item xs={12} md={6}>
      <Select
        labelId="Del"
        id="del"
        label=""
        variant="outlined"
        onChange={cambioDeTipoEnv}
        name="a"
        required="true"
        fullWidth
      >
        <MenuItem value={"Retiro"}>Retiro en Local</MenuItem>
      </Select>
    </Grid>;
    }
  }

  function paraDomicilio(tipo) {
    if(tipo=="Delivery"){
      return <AddressForm />
    }
  }

  const cambioDeTipoPag=(e)=>{
    //console.log(cart.tipoPago)
    //console.log(e.target.value)
    setTipoPag(e.target.value)
    cambiarTipoPagRedux(e.target.value)
  }

  const cambioDeTipoEnv=(e)=>{
    console.log(cart.tipoEnvio)
    //console.log(e.target.value)
    setTipoEnvio(e.target.value)
    cambiarTipoEnvioRedux(e.target.value)
  }

  //REDUX
  const cambiarTipoPagRedux = (tipo) =>{
    dispatch(addTipoPago(tipo));
  }
  const cambiarTipoEnvioRedux = (tipo) =>{
    dispatch(addTipoEnvio(tipo));
  }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Método De Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo"
            label="Unidad Medida"
            variant="outlined"
            onChange={cambioDeTipoPag}
            name="unidadMedida"
            required="true"
            fullWidth
          >
            <MenuItem value="" disabled>Método De Pago</MenuItem>
            <MenuItem value={"Efectivo"}>Dinero Efectivo</MenuItem>
            <MenuItem value={"MercadoPago"}>Mercado Pago</MenuItem>
          </Select>
        </Grid>
        {paraEnvio(tipoPag)}
        {paraDomicilio(tipoEnvio)}
      </Grid>
    </React.Fragment>
  );
}
