function conflict(resource: string= "item"){
    return {
        type:"conflict",
        message: `This ${resource} already exists.`
    }
}

function wrongData(){
    return{
        type:"wrongData",
        message:`The fields are wrong!`
    }
}

function notFound(){
    return{
        type:"notFound",
        message:"User does not exist."
    }
}
export const errors = {conflict, wrongData, notFound}