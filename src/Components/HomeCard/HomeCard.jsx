import { Link } from "react-router-dom";


const HomeCard = ({event}) => {
    const {id, name, venue, date, time, image, titcket_price} = event
    return (
        <div className=" h-92 rounded-lg bg-base-200 shadow-lg">
            <img className="w-full h-48 rounded-t-lg" src={image} alt="" />
            <div className="p-4">
            <h2 className="text-2xl ">{name}</h2>
            <p>Venue: {venue}</p>
            <div className="flex justify-between">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <Link to={`/event-details/${id}`}>
            <button className="py-3 px-5 rounded-lg bg-primary text-white my-4 w-full text-center">See More</button></Link>
            </div>
        </div>
    );
};

export default HomeCard;