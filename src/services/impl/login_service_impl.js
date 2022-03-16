import {http_noauth} from "../http_config";
import {useNavigate} from "react-router-dom"
import {Redirect} from "react-router-dom"
import React from "react";


class LoginService {


    fazLogin(username, password, inteste) {


        if (!inteste) {
            return http_noauth.post(
                '/login',
                {
                    "login": username,
                    "senha": password
                }
            )
        } else {
            if (username == 'admin' && password == 'admin') {
                let straux = username + '' + password
                console.log(btoa(straux))
                localStorage.setItem('login', username)
                localStorage.setItem('pass', password)
                localStorage.setItem('auth', btoa(straux))
                localStorage.setItem('urlfoto', 'nft_4')
                localStorage.setItem('id', '99999999')
                localStorage.setItem('nome', 'Ademiro ')
                console.log('aa')
                return (<Redirect to={'/home'}/>)
            } else {
                localStorage.setItem('login', '')
                localStorage.setItem('pass', '')
                localStorage.setItem('auth', '')
                localStorage.setItem('urlfoto', '')
                localStorage.setItem('id', '')
                localStorage.setItem('nome', '')
            }
        }
    }
}

export default new LoginService();