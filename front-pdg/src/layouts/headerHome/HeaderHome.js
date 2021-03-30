import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ViewModuleRoundedIcon from "@material-ui/icons/ViewModuleRounded";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  iconBlocks: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  buttons: {
    '& > *': {
        margin: theme.spacing(1),
      },
  }
}));

const HeaderHome = () => {
  const classes = useStyles();
  let history = useHistory();

  const haddleLogin = () => {
    history.push("/login");
  }
  const haddleRegister = () => {
    history.push("/register");
  }
  
  return (
    <Grid>
      <AppBar position="static">
        <Toolbar>
          <ViewModuleRoundedIcon className={classes.iconBlocks} />
          <Typography variant="h6" noWrap>
            Chain Custody
          </Typography>

          <Grid className={classes.grow} />
          <Grid className={classes.buttons}>
            <Button 
            variant="outlined" 
            color="inherit"
            onClick={haddleRegister}
            >
              Create acount
            </Button>
            <Button 
            variant="outlined" 
            color="inherit"
            onClick={haddleLogin}
            >
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default HeaderHome;
