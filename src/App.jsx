// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeContext } from "./context/ThemeContext";
// import "./App.css";

// function App() {
//   const { state } = useContext(ThemeContext);

//   return (
//     <div className={state.theme === "dark" ? "app dark" : "app light"}>
//       <Navbar />

//       <main className="main-content">
//         <Outlet />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import "./App.css";

function App() {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={
        state.theme === "dark"
          ? "app dark"
          : "app light"
      }
    >
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;