import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1f1e25',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    paddingLeft: 16,
    fontSize: 16,
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 8,
  },
})
