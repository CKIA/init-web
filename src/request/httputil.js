import request from './axiosconfig'
export function getRequest(uri, params) {
    return request({
        url: uri,
        method: 'get',
        params: params,
        header:{
            'Content-Type':'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'contentType':'application/json'
        }
    })
}

export function postRequest(uri, params) {
    return request({
        url: uri,
        method: 'post',
        data: params,
        header:{
            'Content-Type':'application/json;; charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'contentType':'application/json'
        }
    })
}

export function deleteRequest(uri, params) {
    return request({
        url: uri,
        method: 'delete',
        data: params
    })
}

export function putRequest(uri, params) {
    return request({
        url: uri,
        method: 'put',
        data: params
    })
}
