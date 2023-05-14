import NavBar from "./app/components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Favorite from "./app/layouts/favorite";
import Main from "./app/layouts/main";
import MemberPage from "./app/components/page/personPage";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/memberPage/:memberId" component={MemberPage} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
