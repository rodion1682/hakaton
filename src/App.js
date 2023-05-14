import NavBar from "./app/components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Favorite from "./app/layouts/favorite";
import Main from "./app/layouts/main";
import Person from "./app/components/page/person";
import Breadcrumbs from "./app/components/ui/breadcrumbs";
import "./style.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Breadcrumbs />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/person/:personId?/:edit?" component={Person} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
