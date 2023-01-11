/*
days:Array an array of objects (each object represents a day and includes an id, name, and spots)
day:String the currently selected day
setDay:Function sets the currently selected day and accepts the name of the day eg. "Monday", "Tuesday"
*/

import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const list = props.days.map(day =>
    <DayListItem
      key={day.id}
      setDay={props.setDay}
      name={day.name}
      spots={day.spots}
      selected={props.value === day.name}
    />)

  return (
    <ul>{list}</ul>
  );

}