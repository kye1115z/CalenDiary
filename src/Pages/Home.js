import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Link to="/modaltest1">
                <button>modaltest calendar</button>
            </Link>
            <Link to="/modaltest2">
                <button>modaltest diary</button>
            </Link>
        </>
    );
}

export default Home;
