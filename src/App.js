import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './screen/home'
import NewPost from './screen/newPost'
import Login from './screen/login'
import Demo from './screen/demo'
import DemoPage from './screen/demoPage'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AuthProvider} from './context/AuthProvider';

function App() {
    return (

        <div>

            <AuthProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' element={<Demo/>}>
                            <Demo/>
                        </Route>
                        <Route exact path='/novo' element={<NewPost/>}>
                            <NewPost/>
                        </Route>
                        <Route exact path='/home' element={<Home/>}>
                            <Home/>
                        </Route>
                        <Route exact path='/demo' element={<DemoPage/>}>
                            <DemoPage/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>

    )

}

export default App;
