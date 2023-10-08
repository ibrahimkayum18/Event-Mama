import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import HomeCard from "../Components/HomeCard/HomeCard";
import RightSideBar from "../Components/RightSideBar";
import MarqueeSlider from "../Components/Marquee/MarqueeSlider";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="w-[70%] lg:w[50] mx-auto my-14" data-aos="fade-up">
      <MarqueeSlider></MarqueeSlider>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl text-center font-bold mb-10" data-aos="fade-up">Upcomming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 m-5 md:mx-8 lg:grid-cols-4 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:col-span-2 lg:col-span-3 " data-aos="fade-up">
            {events.map((event) => (
              <HomeCard key={event.id} event={event}></HomeCard>
            ))}
          </div>
          <div className="" data-aos="fade-up">
                <RightSideBar></RightSideBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
