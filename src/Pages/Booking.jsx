import { useEffect, useState } from "react";
import BookingCart from "../Components/BookingCart";



const Booking = () => {

    const [allBooking, setAllBooking] = useState([])
    const [noData, setNoData] = useState('')
    const [show, setShow] = useState(false);

    useEffect( () => {
        const getData = JSON.parse(localStorage.getItem('booked'))
        if (getData) {
            setAllBooking(getData)
        }
        setNoData("You didn't booked any events")
    },[])

    return (
        <div className="mt-5 md:mt-12">
            <div>
                {
                    allBooking.length < 1 && <div className="flex justify-center item-center h-60">
                        <h2 className="text-2xl">{noData}</h2>
                    </div>
                }
            </div>
            <div className="grid md:grid-cols-2 mx-5 md:mx-8 lg:grid-cols-3 gap-5  lg:mx-auto">
                {
                    show ?
                    allBooking.map(booking => <BookingCart key={booking.id} booking={booking}></BookingCart>)
                    : 
                    allBooking.slice(0, 3).map(booking => <BookingCart key={booking.id} booking={booking}></BookingCart>)
                }
            </div>
            <div className="text-center my-10">
                {
                    allBooking.length > 3 &&
                    <button onClick={() => setShow(!show)} className="btn btn-primary">{!show ? "Show More" : "Show Less"}</button>
                }
            </div>
        </div>
    );
};

export default Booking;