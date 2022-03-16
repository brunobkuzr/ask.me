import {http_auth} from '../http_config'

class PostService {
    listarPosts(itensPorPagina, paginaAtual, ordenar, filtro) {
        let urladicional = ''
        if (itensPorPagina !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'itemsPorPagina=' + itensPorPagina
        }
        if (paginaAtual !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'paginaAtual=' + paginaAtual
        }
        if (ordenar !== '') {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'ordenar=' + ordenar
        }
        if (filtro !== '') {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'filtro=' + filtro
        }
        return http_auth.get(`forum/posts?${urladicional}`)
    }
    postarPergunta(parTitulo, parConteudo, parTopicos) {
        return http_auth.post('forum/postar', {
            titulo: parTitulo,
            conteudo: parConteudo,
            topicos: parTopicos
        })
    }
    responderPost(resposta, idPost) {
        return http_auth.post('forum/responder', { resposta: resposta, idPost: idPost })
    }
    likePost(idPost) {
        return http_auth.get(`forum/post/${idPost}/like`)
    }

    dislikePost(idPost) {
        return http_auth.get(`forum/post/${idPost}/dislike`)
    }
    listarPerguntas(idPost, itensPorPagina, paginaAtual, ordenar, filtro) {
        let urladicional = ''
        if (itensPorPagina !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'itemsPorPagina=' + itensPorPagina
        }
        if (paginaAtual !== 0) {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'paginaAtual=' + paginaAtual
        }
        if (ordenar !== '') {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'ordenar=' + ordenar
        }
        if (filtro !== '') {
            if (urladicional !== '') {
                urladicional += '&'
            }
            urladicional += 'filtro=' + filtro
        }
        return http_auth.get(`forum/post/${idPost}/respostas?${urladicional}`)
    }

    buscaPostDetalhado(idPost) {
        return http_auth.get(`forum/post/${idPost}`)
    }
}

export default new PostService();