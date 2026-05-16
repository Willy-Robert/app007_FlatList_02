import { Image, Text, View } from 'react-native';
import estilos from '../styleSheet/estilos';

const bandeiras = [
  { source: { uri: 'https://flagcdn.com/w80/br.png' }, alt: 'Brasil' },
  { source: { uri: 'https://flagcdn.com/w80/gb.png' }, alt: 'Reino Unido' },
  { source: { uri: 'https://flagcdn.com/w80/pt.png' }, alt: 'Portugal' },
  { source: { uri: 'https://flagcdn.com/w80/es.png' }, alt: 'Espanha' },
];

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <View style={estilos.faixaBandeiras}>
        {bandeiras.map((bandeira) => (
          <Image
            key={bandeira.alt}
            source={bandeira.source}
            accessibilityLabel={bandeira.alt}
            style={estilos.bandeiraImagem}
          />
        ))}
      </View>
      <View style={estilos.selo}>
        <Text style={estilos.seloTexto}>PAÍSES</Text>
      </View>
      <Text style={estilos.tituloPrincipal}>Países</Text>
      <Text style={estilos.subtitulo}>Lista carregada a partir de paises.json</Text>
    </View>
  );
}