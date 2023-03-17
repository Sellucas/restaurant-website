import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App h-max bg-[#F1EFF0]">
      <Hero />
      <About />
      <Services />
      <Menu />
    </div>
  );
}

export default App;
