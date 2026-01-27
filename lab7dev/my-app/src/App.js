import "./App.css";
import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
import { useTheme, ThemeProvider } from "./ThemeContext";
import LayoutEffectExample from "./LayoutEffectExample";

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#000",
    padding: "2rem",
    height: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyles}>
      <h1>Aplikacja w trybie: {dark ? "Ciemnym" : "Jasnym"}</h1>
      <button
        onClick={toggleTheme}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Przełącz motyw
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <PrimeCalculator />
      <FormReducer />
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <LayoutEffectExample />
    </div>
  );
}

export default App;
