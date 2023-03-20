import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Chefs from "./components/Chefs";
import Form from "./components/Form";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App h-max bg-[#F1EFF0]">
      <Hero />
      <About />
      <Services />
      <Menu />
      <Chefs />
      <Form />
      <Testimonials />
    </div>
  );
}

export default App;
