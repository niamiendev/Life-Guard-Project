
import { Redirect } from 'expo-router'
import { ActivityIndicator, View } from 'react-native'
import { useAuth } from '../../context/authContext'

export default function MainScreen() {

    const { isAuthenticated, loading } = useAuth()
    if (loading) {
        return (
            <View style={
                {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                <ActivityIndicator />
            </View>
        )
    }
    if (isAuthenticated) {
        return <Redirect href="/(tabs)/emergency" />
    }
    return <Redirect href="/started" />
}