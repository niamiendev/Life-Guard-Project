import axios from "axios"
import { useState } from "react"
import { Alert } from "react-native"

const URL = "http://192.168.1.10:8000"

export type Profile = {
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    address: string,
    phone_number: string,
    blood_type: string
}

const useAuth = () => {

    const [authenticated, setAuthenticated] = useState(false)

    const register = async (profile: Profile) => {

        try {
            const resp = await axios.post(
                `${URL}/api/account/register/`,
                profile,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            Alert.alert("Inscription", "Inscription réussie, connectez-vous maintenant !")

            return resp.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("STATUS :", error.response?.status)
                console.log("DATA :", error.response?.data)
                console.log("HEADERS :", error.response?.headers)
            } else {
                console.log("ERROR :", error)
            }

            throw error
        }

    }
    const login = async (username: string, password: string) => {

        try {
            const resp = await axios.post(
                `${URL}/api/account/login/`,
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            setAuthenticated(true)
            Alert.alert(
                "Connexion",
                "Bienvenue dans LifeGuard !"
            )
            //console.log(resp)
            return resp.data
        } catch (error) {
            setAuthenticated(false)
            Alert.alert("Erreur", `${error}`)
            throw error
        }
    }

    const logout = async (accessToken: string, refreshToken: string) => {

        try {
            const resp = await axios.post(
                `${URL}/api/account/logout/`,
                {
                    refresh: refreshToken,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${accessToken}`
                    }
                }
            )
            setAuthenticated(false)

            Alert.alert(
                "Déconnexion",
                "Aurevoir dans LifeGuard !"
            )
            return resp.data

        } catch (error) {
            Alert.alert("Erreur", `${error}`)
            throw error
        }

    }

    return { register, login, logout, authenticated }
}

export default useAuth