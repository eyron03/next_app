import Nav from '../components/Nav' // Import the Nav component
import About from '../components/About';
import HeroSection from '../components/HeroSection';
export default function Home() {
  return (
    <div>
      <Nav /> 
<br></br>
      <HeroSection/>

      <About/>
    </div>
  );
}