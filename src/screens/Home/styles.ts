import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    flex: 1,
    fontSize: 16,
    height: 56,
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 8,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    marginTop: 36,
    marginBottom: 42,
    gap: 8,
  },
})
