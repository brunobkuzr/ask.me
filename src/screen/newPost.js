import React from "react";
import ReactDOM from "react-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import {NavLink as Link} from "react-router-dom";


const save = (data) => {
    console.log(data);
};

const myTheme = createTheme({
    // Set up your custom MUI theme here
});

const NewPost = () => {
    return (
        <div className="container">
            <div className="div-post">
                <form>
                    <br/>
                    <TextField fullWidth label="Título" id="fullWidth"/>
                    <br/>
                    <Divider/>
                    <ThemeProvider theme={myTheme}>
                        <MUIRichTextEditor
                            label="Escreva algo aqui..."
                            onSave={save}
                            inlineToolbar={true}
                        />
                    </ThemeProvider>
                </form>
            </div>
            <div className="flex-item">

                <div className="div-dicas">
                    <b>Como montar uma boa pergunta?</b>
                    <br/>
                    <br/>
                    <b>Passo 1:</b>
                    <br/>
                    Resuma o problema e escreva de forma coerente
                    <br />
                    <br />
                    <b>Passo 2:</b>
                    <br />
                    Descreva o que ja foi tentado, de preferência com detalhes
                    <br />
                    <br />
                    <b>Passo 3:</b>
                    <br />
                    Revise a sua pergunta antes de mandar e garanta que já não exista uma resposta para ela no nosso fórum.

                </div>
                <div className="div-botao">
                    <Button className="botao-post" component={Link} variant="contained" color="success" to="/novo">
                        Perguntar
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default NewPost
