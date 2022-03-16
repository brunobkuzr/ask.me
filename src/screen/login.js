import React from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Redirect} from "react-router-dom";
import {useRef, useState, useEffect, useContext} from "react";
import AuthContext from "../context/AuthProvider";
import LoginService from "../services/impl/login_service_impl";


const Login = () => {
    const [indicaLogin, setLogin] = useState(0);
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
        console.log(user, pwd);
        LoginService.fazLogin(user, pwd, 1);
        setUser('');
        setPwd('');
    }
    return (
        <>

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
                        <Button className="botao-post"  onClick={ handleSubmit} variant="contained" color="success" >
                            Entrar
                        </Button>

                    </form>
                </Box>

        </>
    )
}

export default Login
