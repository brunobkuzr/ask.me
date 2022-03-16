import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './screen/home'
import NewPost from './screen/newPost'
import Login from './screen/login'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {AuthProvider} from './context/AuthProvider';

function App() {
    return (

        <div>

            <AuthProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' element={<Login/>}>
                            <Login/>
                        </Route>
                        <Route exact path='/novo' element={<NewPost/>}>
                            <NewPost/>
                        </Route>
                        <Route exact path='/home' element={<Home/>}>
                            <Home/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>

    )

}

export default App;
