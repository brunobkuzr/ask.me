import {http_noauth} from '../http_config'

class ExampleService {
    listarConteudos(itensPorPagina, paginaAtual) {
        let urladicional = ''
        if (itensPorPagina !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            } else {
                urladicional += '?'
            }
            urladicional += 'itemsPorPagina=' + itensPorPagina
        }
        if (paginaAtual !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            } else {
                urladicional += '?'
            }
            urladicional += 'paginaAtual=' + paginaAtual
        }
        return http_noauth.get(`/exemplo/lista${urladicional}`)
    }
}
export default new ExampleService()