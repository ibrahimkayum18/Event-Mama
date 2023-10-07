import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBookDead } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {

    const [selectedEvent, setSelectedEvent] = useState(null);

    const {image, name, venue, ticket_price, description, date, time} = selectedEvent || {}

    const {id} = useParams();
    const intId = parseInt(id)
    const events = useLoaderData()

    useEffect(() => {
        const find = events.find(event => event.id === intId)
        if(find){
            setSelectedEvent(find)
        }
    },[events, intId])

    const handleBooking = () => {
        const localData = [];

        const BookingData = JSON.parse(localStorage.getItem('booked'))
        if(!BookingData){
            localData.push(selectedEvent)
            localStorage.setItem('booked', JSON.stringify(localData))
            toast.success('Congratulations, You have Booked this event')
        }
        else{
            const isExist = BookingData.find(data => data.id === intId)
            if (isExist) {
                toast.error('Already Booked')
            }
            else{
                localData.push(...BookingData, selectedEvent);
                localStorage.setItem('booked', JSON.stringify(localData));
                toast.success('Congratulation, You Booked this event')
            }
        }

    }
    
    return (
        <div >
            <div className="grid md:grid-cols-2 gap-6 mt-14 md:w-[80%] mx-auto item-center">
                <div>
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl"><span className="font-bold">Price: </span>$ {ticket_price}</h1>
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <h3 className="text-2xl font-semibold">Venue: {venue}</h3>
                    <p><span className="font-bold">Date:</span> {date}</p>
                    <p><span className="font-bold">Time:</span> {time}</p>
                    <p>{description}</p>
                    <div className="mt-10">
                        <button onClick={handleBooking} className="btn btn-primary">Book This Event for ${ticket_price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;