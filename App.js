import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import ForgetPassword from './src/components/Authentication/ForgetPassword/forget-password';
import Main from './src/components/Main/main';
import { navName } from './src/Global/constant';
import { AuthenticationProvider } from './src/providers/authentication-provider';
import { SettingCommonProvider } from './src/providers/setting-common-provider';
import { SnackbarProvider } from './src/providers/snackbar-provider';
import { LoadingProvider } from './src/providers/loading-provider';
import MySnackbar from './src/components/Common/my-snackbar';
import Loading from './src/components/Common/loading';
import Splashscreen from './src/components/Others/Splashscreen/splashscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <LoadingProvider>
      <SnackbarProvider>
        <SettingCommonProvider>
          <AuthenticationProvider>
            <NavigationContainer>
            <Stack.Navigator initialRouteName={navName.splashscreen}>
                <Stack.Screen name={navName.splashscreen}
                  component={Splashscreen}
                  options={{headerShown: false}}
                />
                
                <Stack.Screen name={navName.login} 
                  component={Login} 
                  options={{headerShown: false}}
                />

                <Stack.Screen name={navName.register} 
                  component={Register} 
                  options={{headerShown: false}}
                />

                <Stack.Screen name={navName.forgetPassword}
                  component={ForgetPassword}
                  options={{headerShown: false}}
                />

                <Stack.Screen name={navName.main}
                  component={Main}
                  options={{headerShown: false}}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <MySnackbar />
            <Loading />
          </AuthenticationProvider>
        </SettingCommonProvider>
      </SnackbarProvider>
    </LoadingProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#000'
  },
});
