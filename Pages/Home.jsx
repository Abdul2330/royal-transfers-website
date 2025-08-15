import Navbar from "../src/Components/Navbar";
import Hero from "../src/Components/Hero";
import CarTypes from "../src/Components/CarTypes";
import City from "../src/Components/City";
import Terms from "../src/Components/Terms";
import Footer from "../src/Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarTypes />
      <City />
      <Terms />
      <Footer />
    </>
  );
}
