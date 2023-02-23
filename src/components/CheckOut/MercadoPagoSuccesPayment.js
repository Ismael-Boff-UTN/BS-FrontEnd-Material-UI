import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}

            Your Website

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {


    const token = localStorage.getItem("token");
    const usuario = useSelector((state) => state.auth.resto);





    useEffect(() => {

        var array = localStorage.getItem('carritoLocal');
        // Se parsea para poder ser usado en js con JSON.parse :)
        array = JSON.parse(array);
        //console.log("carrito Local stringify desde MP ", array);
        axios
            .put(`http://localhost:4000/api/usuarios/addPedidoUsuario/${usuario.uid}`, array, {
                headers: {
                    "x-token": token,
                },
            })
            .then((res) => {
                alert("pedido agregado")
                localStorage.removeItem("carritoLocal")
                //swal.fire({ title: "Felicitaciones", html: `${res.data.msg} su pedido es el numero: ${res.data.numero} y se tardar un promedio de ${cuenta()} min`, icon: "success" });
            })
            .catch((e) => {
                console.log(e);
            });


    }, [])


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Pago Exitoso! Gracias Por Su Compra!
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'Pin a footer to the bottom of the viewport.'}
                    {'The footer will move as the main element of the page grows.'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}