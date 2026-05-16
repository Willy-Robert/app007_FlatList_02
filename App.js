import { View } from 'react-native';
import Conteudo from './src/componentes/Conteudo';
import estilos from './src/styleSheet/estilos';

export default function App() {
  return (
    <View style={estilos.tela}>
      <Conteudo />
    </View>
  );
}