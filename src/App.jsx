import ThemeContextProvider from "./contexts/theme-contexts.jsx";
import Greeting from "./Greeting.jsx";
import Message from "./Message.jsx";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Message />
        <Greeting />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
