

const BookingCart = ({booking}) => {
    const {name, venue, date, time, image, ticket_price, description } = booking || {}
    return (
        <div className=" bg-sky-400 rounded-lg" data-aos="zoom-in">
            <div className="">
                <img className="w-full rounded-t-lg" src={image} alt="" />
            </div>
            <div className="p-3">
                <h1 className="text-3xl font-bold">Price: {ticket_price}</h1>
                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className="text-2xl font-bold">Venue: {venue}</h2>
                <p>Date: {date} <span className="ml-10">Time: {time}</span></p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BookingCart;