import { Grid, makeStyles } from "@material-ui/core";
import Footer from "../../layouts/footer/Footer";
import HeaderHome from "../../layouts/headerHome/HeaderHome";
import HomeContent from "../homeContent/HomeContent";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    //height: "100%",
  },
  content: {
    height: "100%",
    marginTop: 20,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { children } = props;
  
  return (
    <div className={classes.root}>
        <HeaderHome />

      <main className={classes.content}>
        <HomeContent />
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
