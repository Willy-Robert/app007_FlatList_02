import { Image, View } from 'react-native';
import estilos from '../styleSheet/estilos';

const bandeiras = [
  { source: { uri: 'https://flagcdn.com/w80/br.png' }, alt: 'Brasil' },
  { source: { uri: 'https://flagcdn.com/w80/gb.png' }, alt: 'Reino Unido' },
  { source: { uri: 'https://flagcdn.com/w80/pt.png' }, alt: 'Portugal' },
  { source: { uri: 'https://flagcdn.com/w80/es.png' }, alt: 'Espanha' },
];

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
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
    </View>
  );
}