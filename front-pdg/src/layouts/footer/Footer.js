import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import Perfil from "../../assets/images/perfil.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    //position: "fixed", /* instead of absolute */
    //bottom: 0,
    //left: 0,
    //zIndex: 9,
    right: 0,
    justify: "center",
  },
  card: {
    margin: theme.spacing(1),
    //width: theme.spacing(7),
    //height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <div
      container
      direction="row"
      justify="center"
      alignItems="center"
      //className = {classes.root}
    >
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.card}
      >
        <Grid>
          <Avatar alt="Julián Mabesoy" src={Perfil} className={classes.large} />
        </Grid>
        <Grid 
        direction="column"
        justify="center" 
        alignItems="center"
        >
          <Typography> Julián Mabesoy</Typography>
          <Typography> Ing de Sistemas</Typography>
          <Typography> Universidad Icesi</Typography>
        </Grid>
      </Grid>
      <Typography variant="body1">
        SISTEMA PARA CONTROL DE CADENA DE CUSTODIA FORENSE BASADO EN BLOCKCHAIN
      </Typography>
    </div>
  );
};

export default Footer;
