import { render, screen } from '@testing-library/react'
import App from './App'

// PRUEBA 1: Verifica que el título existe
test('muestra el título de la app', () => {
  render(<App />)
  const titulo = screen.getByText(/Hola DevOps/i)
  expect(titulo).toBeInTheDocument()
})

// PRUEBA 2: Verifica el mensaje de despliegue
test('muestra el mensaje de despliegue', () => {
  render(<App />)
  const mensaje = screen.getByText(/GitHub Actions/i)
  expect(mensaje).toBeInTheDocument()
})