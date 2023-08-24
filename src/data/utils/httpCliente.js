const API = "https://api.thedogapi.com";

export const get = (path)=>{
    return fetch (API+path,{
        headers:{
            'x-api-key' :
            "Bearer live_KYna3iT67CFMo3GzIoFj294zqyoREMgGKTZn57CRO2RaJ81m1jQgbbHLgCxNZEo2",
            "Content-Type" :"application/json;charset=utf-8",   
    }
    }).then((results)=>results.json())
}