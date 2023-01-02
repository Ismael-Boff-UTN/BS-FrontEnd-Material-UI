import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useSelector } from "react-redux";

export default function DomicilioForm() {
  const { nombre, apellido, domicilio, telefono } = useSelector((state) => state.auth.resto);
   
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Verificación De Domicilio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            defaultValue={nombre}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Apellido"
            fullWidth
            autoComplete="family-name"
            defaultValue={apellido}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Localidad"
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
