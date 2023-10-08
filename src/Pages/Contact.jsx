import { FaArrowCircleDown, FaRegAddressCard, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/HXTGbdQ/banner.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-72 mt-14 w-full text-center "
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-bold text-orange-500 pt-20">|</h2>
        <h2 className="text-5xl font-bold text-white">
          Contact <span className="text-orange-500">Us</span>
        </h2>
        <span className="text-4xl block">
          <FaArrowCircleDown></FaArrowCircleDown>
        </span>
      </div>
      <div>
        <h2 className="text-center my-12 text-2xl font-bold">
          Contact us if you need our services. <br /> We will be happy to make
          your events memorable!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 lg:mx-0">
          <div className="bg-sky-400 text-white rounded-br-2xl rounded-tl-2xl p-7 relative" data-aos="fade-up">
            <span className="text-3xl absolute top-6  right-10">
              <FaRegAddressCard></FaRegAddressCard>
            </span>
            <h3 className="text-2xl font-semibold pt-7">Address</h3>
            <h2 className="text-2xl font-bold pb-7">Sonir Akhra, Dhaka</h2>
          </div>
          <div className="bg-sky-400 text-white rounded-br-2xl rounded-tl-2xl p-7 relative" data-aos="fade-up">
            <span className="text-3xl absolute top-6  right-10">
              <FaPhone></FaPhone>
            </span>
            <h3 className="text-2xl font-semibold pt-7">Phone</h3>
            <h3 className="text-2xl font-bold pb-7">+8801700000000</h3>
          </div>
          <div className="bg-sky-400 text-white rounded-br-2xl rounded-tl-2xl p-7 relative" data-aos="fade-up">
            <span className="text-3xl absolute top-6  right-10">
              <MdEmail></MdEmail>
            </span>
            <h3 className="text-2xl font-semibold pt-7">Email</h3>
            <h3 className="text-2xl font-bold pb-7">eventmama@gmail.com</h3>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-center text-3xl font-bold mb-10">
          -<span className="text-orange-500">Message</span> Form
        </h2>
        <form>
          <div className="flex justify-center item-center gap-7 w-[90%] md:w-[60%] lg:w[50%] mx-auto mb-10">
            <input
              type="text"
              className="py-3 bg-white rounded-lg w-full px-6"
              name="name"
              placeholder="Your Name..."
            />
            <input
              type="email"
              className="py-3 bg-white rounded-lg w-full px-6"
              name="name"
              placeholder="Your email..."
            />
          </div>
          <div className="flex justify-center item-center gap-7 w-[90%] md:w-[60%] lg:w[50%] mx-auto mb-10">
            <input
              type="number"
              className="py-3 bg-white rounded-lg w-full px-6"
              name="phone"
              placeholder="Your Contact Number..."
            />
            <input
              type="text"
              className="py-3 bg-white rounded-lg w-full px-6"
              name="info"
              placeholder="Where do you here about us?"
            />
          </div>
          <div className="w-[90%] md:w-[60%] lg:w[50%] mx-auto">
            <textarea
              name="comments "
              className="w-full p-5 rounded-lg"
              id=""
              placeholder="Your Message..."
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="w-[90%] md:w-[60%] lg:w[50%] mx-auto my-10">
          <button className="py-2 text-white bg-blue-600 font-bold rounded-lg w-full ">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
