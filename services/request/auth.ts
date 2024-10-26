import Axios from '@/Axios/Axios'



interface formdData_type {
    username: string,
    email: string,
    phone_number: string,
    password: string,


}

interface params_register {
    formData: formdData_type
}

// interface params_login{
//    formData :formData_type
// }


class Auth {


    register({ formData }: params_register) {


        Axios.post('account/register/', formData)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('access',response.data.access)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    login({ formData }: params_register) {


        Axios.post('account/login', formData)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem('access',response.data.access)
            })
            .catch((error) => {
                console.log(error)
            })
    }


}



export default  Auth