import http from "./http"

export async function sendmail(_jsondata) {

    const jsonData = _jsondata
    return http({
        method: 'post',
        url: '/email',
        data: jsonData
    })
}
