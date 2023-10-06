import { Link } from "react-router-dom";


const ErrprPage = () => {
    return (
        <div>
            <h2 className="text-5xl">404</h2>
            <h3>Error</h3>
            <Link to={'/'}><button>Go Back</button></Link>
        </div>
    );
};

export default ErrprPage;