import React, {useState} from "react";
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";

const DemoPage = () => {
    const navigate = useHistory();
    const mudaPagina = async (e) => {
        e.preventDefault();
        navigate.push('/');
    }
    return (
        <>
            <section>
                <h1>Você mudou de página</h1>
                <iframe src="https://giphy.com/embed/Js7cqIkpxFy0bILFFA" width="100%" height="100%"
                        frameBorder="0" className="giphy-embed" allowFullScreen></iframe>

                <Button variant="contained" color="success" onClick={mudaPagina}>
                    Voltar
                </Button>
            </section>
        </>
    )
}

export default DemoPage
