import Marquee from "react-fast-marquee";

const MarqueeSlider = () => {
  return (
    <div >
      <h2 className="font-bold text-2xl md:text-3xl text-center mb-5">Latest Events...</h2>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="skyblue" gradientWidth={50}>
        <p className="mr-5 underline text-xl font-semibold ">Country Jamboree 2023</p>
        <p className="mr-5 underline text-xl font-semibold ">R&B Groove Fest</p>
        <p className="mr-5 underline text-xl font-semibold ">Classical Concert Series</p>
        <p className="mr-5 underline text-xl font-semibold ">City Park Amphitheater</p>
        <p className="mr-5 underline text-xl font-semibold ">Pop Sensation Night</p>
        <p className="mr-5 underline text-xl font-semibold ">Epic Rock Fest 2023</p>
      </Marquee>
    </div>
  );
};

export default MarqueeSlider;
