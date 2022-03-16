import React from "react";
import ReactDOM from "react-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import {NavLink as Link} from "react-router-dom";
import {useRef, useState, useEffect, useContext} from "react";
import AuthContext from "../context/AuthProvider";
import LoginService from "../services/impl/login_service_impl";


const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        LoginService.faz
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }
    return (
        <>
            {success ? (
                <section>
                    <h1>Você entrou</h1>
                    <br/>
                    <p>
                        <a href="#"> Go to Home</a>
                    </p>
                </section>
            ) : (
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuário</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <Button className="botao-post" component={Link} variant="contained" color="success" to="/novo">
                            Entrar
                        </Button>

                    </form>
                </Box>
            )}
        </>
    )
}

export default Login
