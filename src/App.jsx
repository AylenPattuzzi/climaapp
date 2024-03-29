import AppCLima from "./components/AppCLima"
import { ClimaProvider } from "./context/ClimaProvider"

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
      <AppCLima />

    </ClimaProvider>
  )
}

export default App
