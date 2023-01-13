/*
name: String the name of the day
spots: Number the number of spots remaining
selected: Boolean true or false declaring that this day is selected
setDay: Function accepts the name of the day eg. "Monday", "Tuesday"
*/

import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss"


const formatSpots = function(props){
  if(props.spots > 1){
    return (props.spots + " spots remaining")
  }
  if(props.spots === 1) {
    return ("1 spot remaining")
  }
  if(props.spots === 0){
    return ("no spots remaining")
  }
}


export default function DayListItem(props) {
const dayClass = classNames("day-list__item", {
  "day-list__item--selected": props.selected,
  "day-list__item--full": props.spots === 0
})

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
}