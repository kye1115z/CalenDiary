import Button from "@mui/material/Button";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate("/SignIn");
    };
    const navigateSignUp = () => {
        navigate("/SignUp");
    };
    return (
        <div>
            <ResponsiveAppBar />
            <div className="Main">
                <div className="head">
                    <h2>Invite the world to your events</h2>
                    <h5>
                        Online calendar for all your personal and business
                        scheduling needs. <br /> Get started for free!
                    </h5>
                </div>
                <div className="menu_buttons">
                    <Button
                        className="main_button"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        variant="contained"
                        onClick={navigateSignIn}
                    >
                        Sign in
                    </Button>
                    <Button
                        className="main_button"
                        color="success"
                        sx={{ mt: 3, mb: 2 }}
                        variant="contained"
                        onClick={navigateSignUp}
                    >
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Main;
