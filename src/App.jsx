import { useTheme } from './hooks/useTheme.js';

function App() {
  const { theme, setTheme } = useTheme();
  return (
    <main className={theme}>
      <p>{theme}</p>
      <button
        onClick={() => setTheme(() => (theme === 'light' ? 'dark' : 'light'))}
      >
        toggle
      </button>
    </main>
  );
}

export default App;
