import { FC } from "react";

// Layout
import Layout from "../../layout";

// Components
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Expereince";

const Home: FC = () => {
  return (
    <Layout>
      <div className="space-y-20">
        <Banner />
        <About />
        <Skills />
        <Experience />
      </div>
    </Layout>
  );
};

export default Home;
