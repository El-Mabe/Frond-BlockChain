import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React, { useState } from "react";
import { auth } from "../../firebaseconfig";

const schema = {
  User: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: "es requerido" },
    length: {
      minimum: 2,
      maximum: 64,
      message: "longitud no adecuada",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  grid: {
    height: "100%",
  },
  content: {
    height: "100%",
    display: "flex",
    alignItems: "auto",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      justifyContent: "auto",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    margin: "auto",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,

    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  sugestion: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(1, 0),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgError, setMsgError] = useState(null);

  const loginUser = (e) => {
    console.log("loginUser");
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, pass)
      .then((r) => console.log(r))
      .catch((err) => {
        console.log(err);
        setMsgError("Ups!! El email o contraseña son incorrectos, por favor intente de nuevo");
      });
  };

  return (
    <Grid className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid
          className={classes.content}
          item
          md={12}
          xs={12}
          alignItems="center"
          container
        >
          <Grid
            container
            className={classes.contentHeader}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Grid>
          <Grid className={classes.contentBody}>
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
              <Button
                onClick={loginUser}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid className="mt-10">
            {
              msgError !== null ?
              (
                <div className='alert alert-danger margin-top-20'>
                  {msgError}
                </div>
              )
              :
              (
                <span></span>
              )
            }

            </Grid>
            </form>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
