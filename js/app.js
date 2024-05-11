const API = 'https://www.youtube.com/watch?v=SWo6t16nKro'
const getData = (resource) =>{
    return new Promise((resolve, reject) =>{
        const request  = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data)
            }
            else if(request.readyState == 4){
                reject('error')
            }
        })
        request.open('get' ,resource)
        request.send()
    })
}