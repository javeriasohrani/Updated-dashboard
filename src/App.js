import "./App.css";
import LoginSignUp from "./Pages/LoginSignUp";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <LoginSignUp />
    </div>
  );
}

export default App;
