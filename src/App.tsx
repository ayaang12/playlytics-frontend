import "./App.css";

import Callback from "./components/Callback";
import Landing from "./components/Landing";

interface AppProps {
  forceLanding?: boolean;
}

function App({ forceLanding = false }: AppProps) {
  const path = window.location.pathname;

  if (!forceLanding && path === "/callback") {
    return <Callback />;
  }

  return <Landing />;
}

export default App;
