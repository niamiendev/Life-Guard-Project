import * as SecureStore from "expo-secure-store"

const ACCESS_TOKEN = "access_token"
const REFRESH_TOKEN = "refresh_token"

export const tokenStorage = {
    async save(accessToken: string, refreshToken: string) {
        await SecureStore.setItemAsync(
            ACCESS_TOKEN,
            accessToken
        )

        await SecureStore.setItemAsync(
            REFRESH_TOKEN,
            refreshToken
        )
    },

    async getAccessToken() {
        return await SecureStore.getItemAsync(ACCESS_TOKEN)
    },

    async getRefreshToken() {
        return await SecureStore.getItemAsync(REFRESH_TOKEN)
    },

    async clear() {
        await SecureStore.deleteItemAsync(ACCESS_TOKEN)
        await SecureStore.deleteItemAsync(REFRESH_TOKEN)
    }
}