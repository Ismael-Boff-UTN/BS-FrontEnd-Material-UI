import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from "@material-ui/core/Avatar";
import { styled } from '@mui/material/styles';
import AddressForm from "./DomicilioForm";
import { useSelector, useDispatch } from "react-redux";
import { addTipoPago, addTipoEnvio} from "../../actions/cart";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));
  
export default function ResumenCompra() {
    const usuario = useSelector((state) => state.auth.resto);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    var total = 0;


    function mapeoDeProductos() {
        return <ul>
            {cart.items.map((item) => (
                <li>{item.articulo.denominacion} x {item.cantidad} | Precio c/u: {item.precioUnitario}$</li>
            ))}
        </ul>
      }
    
      function totalCompra() {
        cart.items.forEach((item) => {
            total += item.precioUnitario*item.cantidad;
        }); 
        return <p>
            <p>-----------------------------------------------------</p>
            <b>Total: {total}$</b>
        </p>
      }

      function siDelivery() {
        if(cart.tipoEnvio=="Delivery"){
            return<p>
                Enviar a: {cart.domicilio.localidad}, {cart.domicilio.calle}, {cart.domicilio.numero}
            </p>
        }
      }
    

  return (
    <React.Fragment>
        <Typography variant="h3" gutterBottom align="center">
            Resumen de la compra:
            {console.log(usuario)}
        </Typography>
        <Grid container spacing={2} columns={16} justifyContent="center">
            <Grid item xs={8}>
                <Item>
                <Typography variant="body1" gutterBottom>Pedido relizado por: {usuario.nombre} {usuario.apellido}</Typography>
                    <Typography variant="body1" gutterBottom>Tipo de Envio: {cart.tipoEnvio}</Typography>
                    {siDelivery()}
                    <Typography variant="body1" gutterBottom>Tipo de Pago: {cart.tipoPago}</Typography>
                    <Typography variant="body1" gutterBottom>Numero de telefono: {usuario.telefono}</Typography>
                    {mapeoDeProductos()}
                    {totalCompra()}
                </Item>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}
