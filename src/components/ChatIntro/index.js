import React from 'react';
import {Container} from './styles';

const ChatIntro = () =>{
    return(
        <Container>
            <img src="https://web.whatsapp.com/img/intro-connection-hq-light_9466a20e6d2921a21ac7ab82419be157.jpg" alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conectado ao seu telefone para sincronizar suas mensagens. <br/> Para reduzir o uso de dados, conecte seu telefone a uma rede wi-fi</h2>
        </Container>
    )
}

export default ChatIntro;