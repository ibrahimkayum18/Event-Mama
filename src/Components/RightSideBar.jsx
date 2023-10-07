import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold px-5 mb-5'>Follow Us</h2>
                <div className='px-5'>
                    <div >
                        <button className='block flex gap-2 item-center border-2 rounded-t-lg py-3 text-center w-full justify-center border-blue-600 font-bold'><span className='text-2xl text-blue-600'><FaFacebook></FaFacebook></span>Facebook</button>
                    </div>
                    <div >
                        <button className='block flex gap-2 item-center border-x-2  py-3 text-center w-full justify-center border-blue-600 font-bold'><span className='text-2xl text-sky-500'><FaTwitter></FaTwitter></span>Twitter</button>
                    </div>
                    <div >
                        <button className='block flex gap-2 item-center border-2 rounded-b-lg py-3 text-center w-full justify-center border-blue-600 font-bold'><span className='text-2xl text-red-400'><FaInstagram></FaInstagram></span>Instagram</button>
                    </div>
                    
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl font-bold px-5 mb-5'>More Events</h2>
                <div className='relative p-5 bg-white rounded-lg shadow-lg mb-8'>
                    <img className='w-full rounded-lg' src="https://i.ibb.co/kgH4WY7/wedding.jpg" alt="" />
                    <div className='absolute bottom-7 left-20'>
                        <h2 className="text-3xl font-bold text-white">Weeding</h2>
                    </div>
                </div>
                <div className='relative p-5 bg-white rounded-lg shadow-lg mb-8'>
                    <img className='w-full rounded-lg' src="https://i.ibb.co/R2S8zpv/business.jpg" alt="" />
                    <div className='absolute bottom-7 left-20'>
                        <h2 className="text-3xl font-bold text-white">Business</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;