import NavBar from "./app/components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Favorite from "./app/layouts/favorite";
import Main from "./app/layouts/main";
import Person from "./app/components/page/person";
import Breadcrumbs from "./app/components/ui/breadcrumbs";
import "./style.css";
import FavoriteProvider from "./app/hooks/useUsers";

function App() {
    return (
        <div className="App">
            <FavoriteProvider>
                <NavBar />
                <Breadcrumbs />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/favorite" component={Favorite} />
                    <Route
                        path="/person/:personId?/:edit?"
                        component={Person}
                    />
                    <Redirect to="/" />
                </Switch>
            </FavoriteProvider>
        </div>
    );
}

export default App;
