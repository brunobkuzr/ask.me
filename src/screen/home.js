import * as React from "react";
import {Component} from "react";
import {Modal} from 'react-bootstrap'
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import {Rating} from "@mui/material";
import {Pagination} from "@mui/material";
import avatar from '../static/sad.png'
import {Post} from "../components/post";
import Button from '@mui/material/Button';
import { Routes, Route, NavLink as Link } from "react-router-dom"

const StyledPaper = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));



const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 2.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const Home = () => {

    return (
        <div>
            <div className="div-principal">
                <p className="p-topo">Todas as questões</p>
                <Button className="botao-pergunta" component={Link} variant="contained" color="success" to="/novo">
                        Nova pergunta
                </Button>
                <div className="div-card">
                    <Box sx={{display: 'inherit', overflow: 'hidden'}}>
                        <StyledPaper
                            sx={{
                                my: 1,
                                mx: 0,
                                p: 2,
                                minWidth: 1,
                            }}
                        >
                            <Grid container wrap="nowrap" spacing={3}>
                                <Grid item className="grid-principal">
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                        variant="dot"
                                    >
                                        <Avatar src={avatar}></Avatar>
                                    </StyledBadge>


                                    <span>&nbsp;Bruno Beckhauser</span>
                                    <br></br>
                                    <Rating name="read-only" value={5} readOnly/>
                                    <br>
                                    </br>
                                    <span className="span-resposta">Respostas 5</span>
                                </Grid>
                                <Grid item>
                                    <div className='vl'></div>
                                </Grid>
                                <Grid item xl className="grid-texto">
                                    <a href='#'>Como iniciar em React?</a>
                                    <br></br>
                                    <span className="span-resposta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nunc vel risus commodo viverra maecenas. Pellentesque massa placerat duis ultricies lacus sed. Cras tincidunt lobortis feugiat vivamus.
                                    </span>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Box>
                    <Post></Post>
                    <Pagination count={5} variant="outlined" shape="rounded"/>
                </div>
            </div>
        </div>
    )

}

export default Home