import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f3f6fb',
    paddingTop: 48,
    paddingHorizontal: 14,
  },
  cartao: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#dce7f4',
    shadowColor: '#0f172a',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    boxShadow: '0px 8px 14px rgba(15,23,42,0.12)',
    elevation: 4,
  },
  cabecalho: {
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  faixaBandeiras: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    gap: 0,
  },
  bandeiraImagem: {
    width: 34,
    height: 22,
    borderWidth: 0,
    margin: 0,
  },
  tituloPrincipal: {
    fontSize: 25,
    fontWeight: '800',
    color: '#14213d',
    letterSpacing: 0.6,
  },
  subtitulo: {
    marginTop: 6,
    fontSize: 13,
    color: '#5d6b82',
    textAlign: 'center',
  },
  selo: {
    marginBottom: 10,
    width: 92,
    height: 34,
    borderRadius: 18,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seloTexto: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1d4ed8',
    letterSpacing: 1.2,
  },
  lista: {
    flex: 1,
  },
  item: {
    backgroundColor: '#b9d0ea',
    marginHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  pais: {
    fontSize: 15,
    fontWeight: '800',
    color: '#101828',
  },
  capital: {
    marginTop: 3,
    fontSize: 12,
    color: '#516072',
  },
  separador: {
    height: 8,
  },
  rodape: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    backgroundColor: '#ffffff',
  },
  rodapeTexto: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '600',
  },
});