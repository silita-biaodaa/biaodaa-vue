 /* eslint-disable no-unused-vars */
import axios from 'axios'


const baseURL = 'http://120.78.253.169/'
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
