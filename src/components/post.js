import * as React from "react";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { Rating } from "@mui/material";


interface Item {
    avatarx: string ;
    nome: string;
    estrelas: number;
    respostas: number;
    titulo: string;
    texto: string;
}

const images = require.context('../static', true);

const perguntas: Item[] = [{
    avatarx: 'king.jpg',
    nome: 'João das Couves',
    estrelas: 4,
    respostas: 12,
    titulo: 'Qual a diferença entre TypeScript e JavaScript?',
    texto: 'Sit amet nulla facilisi morbi tempus iaculis urna. Libero volutpat sed cras ornare arcu dui vivamus arcu. Urna condimentum mattis pellentesque id nibh tortor. '
},{
    avatarx: 'sad.png',
    nome: 'Insector Sun',
    estrelas: 4,
    respostas: 1,
    titulo: 'Dúvida sobre component',
    texto: 'Sit amet nulla facilisi morbi tempus iaculis urna. Libero volutpat sed cras ornare arcu dui vivamus arcu. Urna condimentum mattis pellentesque id nibh tortor. '
},
    {
        avatarx: 'king.jpg',
        nome: 'Diego o Tigre',
        estrelas: 2,
        respostas:8,
        titulo: 'Como utilizar uma imagem no Vue?',
        texto: 'Sit amet nulla facilisi morbi tempus iaculis urna. Libero volutpat sed cras ornare arcu dui vivamus arcu. Urna condimentum mattis pellentesque id nibh tortor. ',

    },{
        avatarx: 'sad.png',
        nome: 'Sid',
        estrelas: 4,
        respostas: 2,
        titulo: 'O que significa NullPointerException?',
        texto: 'Sit amet nulla facilisi morbi tempus iaculis urna. Libero volutpat sed cras ornare arcu dui vivamus arcu. Urna condimentum mattis pellentesque id nibh tortor. '
    }
]
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
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
            animation: 'ripple 1.2s infinite ease-in-out',
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
export class Post extends Component {
    render() {
        return (
            perguntas.map(({ avatarx, nome, estrelas, respostas, titulo, texto }) => (
                    <Box sx={{ display: 'inherit', overflow: 'hidden' }}>
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
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar src={require('../static/' + avatarx)}></Avatar>
                                    </StyledBadge>
                                    <span>&nbsp;{ nome }</span>
                                    <br></br>
                                    <Rating name="read-only" value= { estrelas }  readOnly />
                                    <br>
                                    </br>
                                    <span className="span-resposta">Respostas { respostas }</span>
                                </Grid>
                                <Grid item>
                                    <div className='vl'></div>
                                </Grid>
                                <Grid item xl className="grid-texto">
                                    <a href='#'>{ titulo }</a>
                                    <br></br>
                                    <span className="span-resposta">{ texto }
                                </span>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Box>

                )
            ));
    }
}