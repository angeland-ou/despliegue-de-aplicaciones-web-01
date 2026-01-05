import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritosContext";

const App = () => {
  return (
    <>
    <FavoritosProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavoritosProvider>
      
    </>
  )
}
export default App;