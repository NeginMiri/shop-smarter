import MainLayout from "../component/layout/MainLayout";
import Hero from "../component/UI/Hero";
import Latest from "../component/UI/Latest";
import BestSelling from "../component/UI/BestSelling";
import OurSpecifications from "../component/UI/OurSpecifications";
import Join from "../component/UI/Join";
import SliderAnimation from "../component/UI/SliderAnimation";
import AllProdact from "../component/UI/AllProdact";


function Home() {
  return (
    <MainLayout>
      <Hero />
      <SliderAnimation />
      <AllProdact />
      <Latest />
      <BestSelling /> 
      <OurSpecifications />
      <Join />
    </MainLayout>
  );
}

export default Home;
