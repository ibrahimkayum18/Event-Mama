import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2015/09/11/08/48/banner-935469_1280.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-72 mt-14 w-full text-center "
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-white pt-20">All You Need To Know</h2>
        <h2 className="text-5xl font-bold text-white">
          About <span className="text-yellow-500">Event MAMA</span>
        </h2>
      </div>
      <div className="text-center mt-12 mx-3 lg:mx-0" data-aos="fade-up">
            <p className="text-xl">We are Event MAMA</p>
            <h2 className="text-2xl  md:text-4xl"><span className="font-bold">No. 1</span> Events Management</h2>
            <Link to={'/'}><button className="py-3 px-6 bg-orange-600 text-white shadow-lg font-bold rounded-xl my-4">Get Started</button></Link>
        </div>
      <div className="my-12 grid gap-6 justify-center  lg:grid-cols-2  w-full md:w-[95%] lg:w-[85%] mx-auto">
        
        <div className="font-semibold p-7 mx-4 bg-white rounded-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Our <span className="text-orange-500">Mission-</span></h2>
            <p>We ensures every aspect of an event runs smoothly. A lot goes into event venue management, with many processes and operations taking place. The entire event cannot be managed and planned by a single person. Instead, a successful event relies on a combination of disciplines and areas of knowledge.</p>
        </div>
        <div className="font-semibold p-7 mx-4 bg-white rounded-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Our <span className="text-orange-500">Vission-</span></h2>
            <p>A solid event management team ensures all the details of the day, from venue marketing and event design to managing attendees and operations, run seamlessly. Full-service event management may focus on a broader team of planners, organizers, and venue managers who cover every aspect of the event planning process and its execution.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
