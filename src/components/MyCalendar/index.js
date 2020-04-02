import React from "react";
import "./style.css";
import Calendar from "react-calendar-mobile";

function MyCalendar(props) {
  const decorate = {
    "2020-03-10": true,
    "2020-03-11": true,
    "2020-03-12": true
  };

  const onDaySelect = value => {
    let changeDay = props.changeDay;
    changeDay(value);
  };

  const onChange = value => {
    let changeDay = props.changeDay;
    changeDay(value);
  };

  return (
    <Calendar
      className="box-shadow pl-0 pb-4 rounded-lg"
      decorate={decorate}
      view="month"
      i18n="pt-BR"
      monthFormat="long"
      onSelectDate={onDaySelect}
      onChange={onChange}
    />
  );
}

export default MyCalendar;
