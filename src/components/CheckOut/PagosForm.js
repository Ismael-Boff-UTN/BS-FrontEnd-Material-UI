import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function PagosForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Método De Pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value=""
            label="Unidad Medida"
            variant="outlined"
            //onChange={onChange}
            name="unidadMedida"
            required="true"
            fullWidth
          >
            <MenuItem value="" disabled>
              Método De Pago
            </MenuItem>
            <MenuItem value={"Efectivo"}>Dinero Efectivo</MenuItem>
            <MenuItem value={"MercadoPago"}>Mercado Pago</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Tipo Envio"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
