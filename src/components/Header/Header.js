import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: "url(https://i.pinimg.com/originals/58/91/17/5891170089718d01281c70ec54ef01bf.jpg)",
    padding: theme.spacing(8, 0, 7),
    backgroundPosition: ("50%", "10px", "10px", "10px"),
    //[ <percentage> | <length> | left | center | right  ]

    marginTop: "60px",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroText: {
    backgroundColor: '#FFF7E8',
    borderRadius: "10px",
    fontFamily: "Dancing Script",
  },
  heroTextSecondary: {
    backgroundColor: '#FFF7E8',
    borderRadius: "10px",
  },
  search: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.heroText}
          >
            Bienvenido Al Buen Sabor!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            className={classes.heroTextSecondary}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container justify="center"></Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
