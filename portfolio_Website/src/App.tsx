import { Film } from "lucide-react";
import About from "./pages/About";
import Career from "./pages/Career";
import Early_life from "./pages/Early_life";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Other_works from "./pages/Other_works";

function App() {
  return (
    <>
      <div className="flex flex-col  h-screen">
        <Navbar />
        <Header />
        <About />
        <Early_life />
        <Career />
        <Film />
        <Other_works />
      </div>
    </>
  );
}

export default App;
