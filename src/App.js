import "./App.css";
import AppTop from "./components/AppTop/AppTop";
import AppBot from "./components/AppBot/AppBot";

function App() {
  return (
    <main>
      <div className="app">
        <AppTop />
        <AppBot />
      </div>
    </main>
  );
}

export default App;
