import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const list = props.days.map(day =>
    <DayListItem
      {...day}
      key={day.id}
      setDay={props.onChange}
      selected={day.name === props.value}
    />)

  return (
    <ul>{list}</ul>
  );

}