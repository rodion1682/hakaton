import NavBar from "./app/components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Favorite from "./app/layouts/favorite";
import Main from "./app/layouts/main";
import "./style.css";
import Person from "./app/components/Person";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/person/:personId?/:edit?" component={Person} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
