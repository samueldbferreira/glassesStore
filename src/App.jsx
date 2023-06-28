import { BrowserRouter } from "react-router-dom";
import { UserStorage } from "./context/UserContext";
import Header from "./components/header/Header";
import RoutesComponent from "./routes/RoutesComponent";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <main className="container">
            <RoutesComponent />
          </main>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
