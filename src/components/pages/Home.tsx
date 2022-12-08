import Loading from "../atoms/Loading";
import { LandingPage, Feature, AboutUs, Product, ContactUs } from "../organisms/home";
import Template from "../templates/Template";

const Home = () => {
  return (
    <Template title="">
      <LandingPage />
      <Feature />
      <AboutUs />
      <Product />
      {/* <ContactUs /> */}
    </Template>
  );
};

export default Home;
