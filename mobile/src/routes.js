import React, {useEffect} from 'react';
import {Button,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './pages/Login';
import HomeAvaliador from './components/Avaliador/HomeAvaliador';
import ListarFato from './components/Avaliador/ListarFato';
import CadastrarFatoObservado from './components/Avaliador/CadastrarFatoObservado';
import CadastroAvaliador from './components/Avaliador/CadastroAvaliador';

import CadastroAvaliado from './components/Avaliados/CadastroAvaliado';
import FichaAvaliacao from './components/Avaliados/FichaAvaliacao';
import ListarFatoAvaliado from './components/Avaliados/ListarFatoAvaliado';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LogoutScreen = ({navigation}) => {
  useEffect(() => {
    // apaga a sessao do usuario atual
    AsyncStorage.removeItem('user').then(() => {
      navigation.replace('Login');
    });
  });
  return null;
}

//telas do avaliador
export const AvaliadorScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="AvaliadorHome" drawerStyle={{backgroundColor: '#fff'}}>
      <Drawer.Screen name="AvaliadorHome" component={HomeAvaliador} />
      <Drawer.Screen name="Cadastro" component={CadastroAvaliador} />
      <Drawer.Screen name="Cadastrar Fato Observado" component={CadastrarFatoObservado} />
      <Drawer.Screen name="Listar Fatos Observados" component={ListarFato} />
      <Drawer.Screen name="Sair" component={LogoutScreen} />
    
    </Drawer.Navigator>
  );
};


// telas do avaliador

// export const AvaliadoScreen = () => {
//   return (
//     <Drawer.Navigator initialRouteName="AvaliadoHome" drawerStyle={{backgroundColor: '#fff'}}>
//       <Drawer.Screen name="AvaliadoHome" component={HomeAvaliado} />
//       <Drawer.Screen name="Cadastro Avaliado" component={CadastroAvaliado} />
//       <Drawer.Screen name="Ficha de Avaliação" component={FichaAvaliacao} />
//       <Drawer.Screen name="Listar Fatos Observados Avaliado" component={ListarFatoAvaliado} />
//       <Drawer.Screen name="Sair" component={LogoutScreen} />
//     </Drawer.Navigator>
//   );
// };


//tem que fazer a verficação no bando do tipo de usuário, ai se for avaliador libera a rota Avaliador, senão libera o Avaliado:

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Avaliador" component={AvaliadorScreen} />
        {/* <Stack.Screen name="Avaliado" component={AvaliadoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

