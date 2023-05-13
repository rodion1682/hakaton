import NavBar from "./app/components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Favorite from "./app/layouts/favorite";
import Main from "./app/layouts/main";
import MemberPage from "./app/components/page/personPage";
import "./style.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/favorite" component={Favorite} />
                <Route path="/memberPage" component={MemberPage} />
                <Route path="/memberPage/:memberId" component={MemberPage} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
