import * as React from "react";
import {Component} from "react";
import {Navbar} from 'react-bootstrap'
import {Container} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'
import avatar from '../static/astro.jpg'
import '../styles/Navbar.css'
import Avatar from '@mui/material/Avatar';


const navbar = () => {
    return (
        <div>
            <Navbar className="nav-pri" bg="dark" variant="dark" color="white">
                <div className="">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-left"
                />

                </div>
                <Container>

                    &nbsp;&nbsp;2º HACKATHON | DESAFIO REACT
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