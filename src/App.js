import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Demo from   './screen/demo'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './styles/styles.scss'
import DemoPage from "./screen/demoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'
function App() {
    return (

        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path ='/' element={<Demo />}>
                        <Demo />
                    </Route>
                    <Route exact path ='/demo' element={<DemoPage />}>
                        <DemoPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    )

}

export default App;
