import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import { addDomicilio } from "../../actions/cart";

export default function DomicilioForm() {
  const { domicilio, telefono } = useSelector((state) => state.auth.resto);
  const [DomPedido, setDomPedido] = React.useState({localidad: domicilio.localidad, calle: domicilio.calle, numero: domicilio.numero});
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

/*   useEffect(()=>{
    setDomPedido(domicilio)
    console.log(DomPedido)
  }) */
   
  const cambiolocalidad=(e)=>{
    setDomPedido({localidad: e.target.value, calle: DomPedido.calle, numero: DomPedido.numero})
    cambiarDomicilioRedux({localidad: e.target.value, calle: DomPedido.calle, numero: DomPedido.numero});
  }

  const cambiocalle=(e)=>{
    setDomPedido({localidad: DomPedido.localidad, calle: e.target.value, numero: DomPedido.numero})
    cambiarDomicilioRedux({localidad: DomPedido.localidad, calle: e.target.value, numero: DomPedido.numero});
  }
  const cambionumero=(e)=>{
    setDomPedido({localidad: DomPedido.localidad, calle: DomPedido.calle, numero: e.target.value})
    cambiarDomicilioRedux({localidad: DomPedido.localidad, calle: DomPedido.calle, numero: e.target.value});
  }

  const cambiarDomicilioRedux = (domi) =>{
    dispatch(addDomicilio(domi));
  }

  return (
    <React.Fragment>
      {console.log(cart)}
      <Typography variant="h6" gutterBottom>
        Verificación De Domicilio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Localidad"
            onChange={cambiolocalidad}
            fullWidth
            autoComplete="shipping address-level2"
            defaultValue={domicilio.localidad}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Calle"
            onChange={cambiocalle}
            fullWidth
            autoComplete="shipping address-line2"
            defaultValue={domicilio.calle}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Numero"
            onChange={cambionumero}
            fullWidth
            defaultValue={domicilio.numero}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Telefono"
            fullWidth
            autoComplete="shipping postal-code"
            defaultValue={telefono}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
