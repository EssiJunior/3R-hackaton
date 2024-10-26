import Axios from "@/Axios/Axios";

type get_params={

    UpdateDataAdmin :  (data:any)=> void
}


export class Admin {



        get({UpdateDataAdmin}:get_params){
            Axios.get('account/admin')
            .then((response)=>{
                console.log(response.data)
                UpdateDataAdmin(response.data)
                
            })
            .catch((error)=>{
                console.log(error)
            })
        }
}

