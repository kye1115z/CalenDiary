import MyCalendar from "./Components/MyCalendar";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
const Diary = () => {
    return (
        <>
            <ResponsiveAppBar />
            <div className="Calendar">
                <div className="profile">
                    <img
                        class="image"
                        src="https://mblogthumb-phinf.pstatic.net/MjAyMDExMTVfMTgy/MDAxNjA1NDA4NzY5NDE2.5jt00qEXbBpsf1GgI1pbYSzFy4l8lEJUaYq_0BrsI3Ig.Rik4wf6ZMDwxpM7sKora89lHRfi-XTvX8GJ5N4LaErUg.JPEG.oogaa107/%EB%AF%B8%EB%85%B8%EC%9D%B4.jpg?type=w800"
                    />
                    <h1>hyeon cheol Lee</h1>
                    <h3>Hankuk university if foreign studies</h3>
                </div>
                <div className="MyCalendar">
                    <MyCalendar />
                </div>
            </div>
        </>
    );
};
export default Diary;
