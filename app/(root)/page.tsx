import About from "../components/About";
import Booking from "../components/Booking";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <About />
      <Services />
      <Location />
      <Booking />
    </div>
  );
}
