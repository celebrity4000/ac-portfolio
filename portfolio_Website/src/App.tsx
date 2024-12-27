import Film from "./pages/Film";
import About from "./pages/About";
import Career from "./pages/Career";
import Early_life from "./pages/Early_life";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Other_works from "./pages/Other_works";
import Shooting from "./pages/Shooting";
import reel from "/img1.png"
function App() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className=" h-auto">
          <div className="z-10">
            <Navbar />
            <Header />
            <About />
          </div>
          <img src={reel} alt="bg" className="border-2 w-full absolute top-5 z-[-1] align-top object-left-top h-[1464px]" />
        </div>

        <div className="flex flex-col">
          <Shooting />
          <Early_life />
          <Career />
          <Film />
          <Other_works />
        </div>

      </div>
    </>
  );
}

export default App;
