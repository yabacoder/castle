import { API, LiveAPI, Token, LiveToken } from "../config";


export function Post(path,data,live) {
    return new Promise((resolve, reject) =>{
        fetch(live?LiveAPI+path:API+path, {
            method: 'POST',
            headers: Token?{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${live?LiveToken:Token}`
            }:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log(error);
            });


    });
}

export function Get(path,live) {
    return new Promise((resolve, reject) =>{

        fetch(live?LiveAPI+path:API+path, {
            method: 'GET',
            headers: Token?{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log(error);
            });


    });
}

export function AuthGet(path, Token,live) {
    return new Promise((resolve, reject) =>{

        fetch(live?LiveAPI+path:API+path, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                console.log(error);
            });


    });
}
