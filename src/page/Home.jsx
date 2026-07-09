import MainLayout from "../component/layout/MainLayout";
import Hero from "../component/UI/Hero";


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
      
      
      <OurSpecifications />
      <Join />
    </MainLayout>
  );
}

export default Home;
