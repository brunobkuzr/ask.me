import axios from "axios";

export const http_noauth = axios.create({
    baseURL: 'http://10.0.11.77:8080/api/',
    AccessControlAllowOrigin: '*',
    AccessControlAllowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
})

export const http_auth = axios.create({
    baseURL: 'http://10.0.11.77:8080/api/',
    Authentication: localStorage.getItem('auth'),
    AccessControlAllowOrigin: '*',
    AccessControlAllowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
})