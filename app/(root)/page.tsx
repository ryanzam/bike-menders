import About from "../components/About";
import Booking from "../components/Booking";
import Location from "../components/Location";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <About />
      <Services />
      <Location />
      <Booking />
    </div>
  );
}
