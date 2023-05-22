import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

class MyCalendar extends Component {
    render() {
        return (
            <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={[
                        { title: "event 1", date: "2022-09-01" },
                        { title: "event 2", date: "2022-09-02" },
                        { title: "event 2asda", date: "2023-04-10" },
                        { title: "asdadsa", date: "2023-04-11" },
                        { title: "asdasa", date: "2023-04-12" },
                        // 데이베이스에서 데이터가져와서 출력.
                    ]}
                />
            </div>
        );
    }
}

export default MyCalendar;
