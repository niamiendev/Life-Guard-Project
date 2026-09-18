import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState
} from "react"

import { Alert } from "react-native"
import api from "../api/axios"
import { Profile } from "../models/all-models"
import { tokenStorage } from "../storages/tokenStorage"


type AuthContextType = {
    profile: Profile | null
    loading: boolean
    isAuthenticated: boolean
    register : (profile:Profile) => Promise<void>
    login: (username: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    profile: null,
    loading: true,
    isAuthenticated: false,
    register: async () => {},
    login: async () => {},
    logout: async () => {}
})

export function AuthProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<Profile | null>(null)
    const [loading, setLoading] = useState(true)

    // useCallback évite le warning ESLint (react-hooks/exhaustive-deps)
    const checkAuth = useCallback(async () => {
        try {
            const token = await tokenStorage.getAccessToken()

            if (!token) {
                setProfile(null)
                return
            }

            const response = await api.get<Profile>("/auth/me/")
            setProfile(response.data)

        } catch (error) {
            console.error("Session invalide :", error)
            await tokenStorage.clear()
            setProfile(null)

        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        checkAuth()
    }, [])
    
    const register = async (profile: Profile) => {

        try {
            const resp = await api.post(
                "/account/register/",
                profile
            )
            Alert.alert("Inscription", "Inscription réussie, connectez-vous maintenant !")

        } catch (error) {
            console.log("ERROR :", error)

            throw error
        }
    }

    const login = async (username: string, password: string) => {
        // On ne touche pas à setLoading ici : l'appelant gère son propre état UI
        const response = await api.post<{ access: string; refresh: string }>(
            "/auth/login/",
            { username, password }
        )

        const { access, refresh } = response.data
        await tokenStorage.save(access, refresh)

        try {
            const userResponse = await api.get<Profile>("/auth/me/")
            setProfile(userResponse.data)
        } catch (error) {
            // Si /auth/me/ échoue après login, on nettoie pour éviter un état incohérent
            await tokenStorage.clear()
            throw error
        }
    }

    const logout = async () => {
        try {
            const refreshToken = await tokenStorage.getRefreshToken()

            if (refreshToken) {
                await api.post("/auth/logout/", { refresh: refreshToken })
            }
        } catch (error) {
            console.error("Erreur lors du logout :", error)
        } finally {
            await tokenStorage.clear()
            setProfile(null)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                profile: profile,
                loading,
                isAuthenticated: profile !== null,
                login,
                register,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}