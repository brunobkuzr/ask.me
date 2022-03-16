import * as React from "react";
import {Component} from "react";
import {Navbar} from 'react-bootstrap'
import {Container} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'
import avatar from '../static/sad.png'
import '../styles/Navbar.css'
import Avatar from '@mui/material/Avatar';


const navbar = () => {
    return (
        <div>
            <Navbar className="nav-pri" bg="dark" variant="dark" color="white">
                <div className="navbar-inner">
                    &nbsp;&nbsp;<img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-left"
                />
                    &nbsp;&nbsp;DESAFIO NOVO SINGE | REACT
                </div>
                <Container>


                </Container>
                <Button variant="success" size="sm">
                    Entrar
                </Button>{' '}
                &nbsp;&nbsp;
                <Button variant="primary" size="sm">
                    Cadastrar
                </Button>{' '}
                &nbsp;
                &nbsp;
                <Avatar src={avatar}></Avatar>
                &nbsp;
                &nbsp;
            </Navbar>
        </div>
    )
}

export default navbar