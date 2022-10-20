export async function servicioTOKEN(){



    //uri
    const URI="https://accounts.spotify.com/api/token"

    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=e4d311243590479d8468acb1fdbb2af3"
    const DATO3="client_id=0bfc7b324145403d943ed7342399ed05"

    //peticion 
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //fetch
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token

    return datos

}