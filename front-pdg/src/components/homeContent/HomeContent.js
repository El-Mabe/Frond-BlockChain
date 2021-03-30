import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    height: "100%",
    width: "100%",
    maxWidth: "80%",
  },
  title: {
    fontFamily: "Roboto",
    margin: "auto",
  }, 
  body: {
    fontFamily: "Roboto",
    fontSize: 20,
    content: 20,
  }
}));

const HomeContent = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      spacing={2}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid className={classes.content}>
        <Typography 
        variant="h4"
        align="center"
        className={classes.title}
        >
          SISTEMA PARA CONTROL DE CADENA DE CUSTODIA FORENSE BASADO EN
          BLOCKCHAIN
        </Typography>
      </Grid>
      <Grid className={classes.content}>
        <Typography 
        variant="h6"
        fontFamily="Roboto"
        fontSize="14"
        >Contexto:
        </Typography>
        <Grid className={classes.body}>
        El proceso de recolección de pruebas forenses en el ámbito de
        aseguramiento informático se lleva a cabo con un protocolo específico.
        Además, de que estas se deben conservar como se encontraban en el lugar de los
        hechos y sólo puede ser manipuladas por agentes especializados para este
        tipo de recolección, esto con el fin de poder garantizar la mayor
        autenticidad, trazabilidad y la inmutabilidad de los elementos materiales probatorios. 
        </Grid>

        
      </Grid>
    </Grid>
  );
};

export default HomeContent;
