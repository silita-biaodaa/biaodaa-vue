import axios from 'axios'
// const baseURL = 'http://192.168.1.161:8080/biaodaa-back/'
// const baseURL = 'http://192.168.1.131:8080/'
const baseURL = 'http://api.biaodaa.com/'
// const baseURL = 'http://120.78.253.169/'
// const baseURL = 'http://pre.biaodaa.com/'



axios.defaults.baseURL = baseURL

export const getJsonData = (url, params) => {
    return new Promise((resolve, reject) => {
        let token = localStorage.getItem("Authorization")
        if (params != null) {
            axios.post(url, params, {
                headers: { 'Content-Type': 'application/json'}
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        } else {
            axios.post(url, null, {
                headers: { 'Content-Type': 'application/json'}
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        }
    })
}
