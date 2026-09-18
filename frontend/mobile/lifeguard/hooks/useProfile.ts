import api from "../api/axios"

const useProfile = () =>{

    const me = async () =>{
        const resp = await api.get("/account/profile/")

        return resp.data
    }


}

export default useProfile