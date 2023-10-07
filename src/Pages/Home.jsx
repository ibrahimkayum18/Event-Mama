import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header/Header";
import HomeCard from "../Components/HomeCard/HomeCard";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="mt-12">
        <h2 className="text-3xl text-center font-bold mb-10">Todays Events</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="grid md:grid-cols-3 gap-5 md:col-span-2 lg:col-span-3">
            {events.map((event) => (
              <HomeCard key={event.id} event={event}></HomeCard>
            ))}
          </div>
          <div className="border">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
