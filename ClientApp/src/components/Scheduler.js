﻿import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 6, 1),
        end: new Date(2022, 6, 1),
    },
    {
        title: "Vacation",
        start: new Date(2022, 6, 18),
        end: new Date(2022, 6, 22),
    },
    {
        title: "Conference",
        start: new Date(2022, 7, 20),
        end: new Date(2022, 7, 23),
    },
];

export default function Scheduler() {
    return (
        <div>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}} />
        </div>
    );
}