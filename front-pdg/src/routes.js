import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Loging from "./components/login/Login";
import Register from "./components/register/Register";

import { auth } from "../../firebaseconfig";
import { useEffect, useState } from "react";


export default function Routes() {

    const [usuario, setUsuario] = useState(null);

    useEffect( ()=> {
    auth.onAuthStateChanged ( (user) => {
        if(user){
            setUsuario(user.email)

        }
    })
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Loging} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
