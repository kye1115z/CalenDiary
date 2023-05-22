import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
function ResponsiveAppBar() {
    const navigate = useNavigate();
    const navigateSignin = () => {
        navigate("/SignIn");
    };
    const navigateCalendar = () => {
        navigate("/Calendar");
    };
    const navigateDiary = () => {
        navigate("/Diary");
    };

    return (
        <div>
            <div className="navbar">
                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={navigateCalendar}
                >
                    Calendar
                </Button>

                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={navigateSignin}
                >
                    Sign In
                </Button>
                <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={navigateDiary}
                >
                    Diary
                </Button>
            </div>
        </div>
    );
}
export default ResponsiveAppBar;
