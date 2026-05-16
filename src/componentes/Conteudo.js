import { FlatList, Text, View } from 'react-native';
import paises from '../dados/paises.json';
import estilos from '../styleSheet/estilos';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

function recuperarId(item) {
  return item.id;
}

function mostrarSeparador() {
  return <View style={estilos.separador} />;
}

function mostrarCabecalho() {
  return <Cabecalho />;
}

function mostrarRodape() {
  return <Rodape />;
}

function mostrarItem({ item }) {
  return (
    <View style={estilos.item}>
      <Text style={estilos.pais}>{item.pais}</Text>
      <Text style={estilos.capital}>Capital: {item.capital}</Text>
    </View>
  );
}

export default function Conteudo() {
  return (
        <FlatList
          style={estilos.lista}
          data={paises}
          keyExtractor={recuperarId}
          renderItem={mostrarItem}
          ItemSeparatorComponent={mostrarSeparador}
          ListHeaderComponent={mostrarCabecalho}
          ListFooterComponent={mostrarRodape}
        />
  );
}