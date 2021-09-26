import "./App.scss";
import Nav from "./components/Nav/Nav.jsx";
import Mattress from "./components/Mattress/Mattress.jsx";
import { CartProvider } from "./store/CartProvider.jsx";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Mattress />
    </CartProvider>
  );
}

export default App;
