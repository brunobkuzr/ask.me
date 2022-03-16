import React, {useState} from "react";
import Button from '@mui/material/Button';
import Astronaut from "../static/astronaut.jpg"


import { useHistory } from "react-router-dom";



import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from "axios";

const Demo = () => {
    const [campo, setCampo] = useState('');
    const [page, setPage] = useState(1);

    const navigate = useHistory();
    const buscaDados = async (e) => {
        console.log('https://hackathon.lince.com.br/api/exemplo?paginaAtual=' + { page }  + '&itemsPorPagina=5')
        try {
         const { data } = await axios.get('https://hackathon.lince.com.br/api/exemplo?paginaAtual=' + {page} + '&itemsPorPagina=5');

            console.log(data?.data)
        } catch (error) {
            console.log('não deu bom')
            console.log(error)
        }
    }

    const fazAcao = async (e) => {
        e.preventDefault();
        setCampo("Voce executou uma ação!")

    }


    const mudaPagina = (event, value) =>{
        setPage(value)
        buscaDados();

    }
    const mudaTela = async (e) =>{
        e.preventDefault();
        navigate.push('/demo');
    }
    return (
        <>
            <section>
                <h2 className="demoH2">Imagem</h2>
                <ul>
                    <li>Deve ser importada, exemplo: <b>import Astronaut from "../static/astronaut.jpg"</b></li>
                </ul>
                <br />
                <img
                    alt=""
                    src={Astronaut}
                    width="500"
                    height="400"
                    className="d-inline-block align-left"
                />
            </section>
            <hr/>
            <section>
                <h2>Botões e gerenciamento de rota</h2>
                <br />
                <ul>
                    <li>Button é um componente, precisa ser importado: <b>import Button from '@mui/material/Button';</b></li>
                </ul>
                <Button variant="contained" color="success" onClick={ fazAcao }>
                    Clique aqui para executar uma ação
                </Button>
                <p> { campo }</p>
                <br />

                <Button variant="contained" color="success" onClick={ mudaTela }>
                    Clique aqui para mudar de página
                </Button>
            </section>
            <hr />
            <section>
                <h2>Listas e paginação</h2>
                <Stack spacing={2}>
                    <Pagination count={5} shape="rounded" page={ page } onChange={ mudaPagina } />
                </Stack>
            </section>
        </>
    )
}

export default Demo
