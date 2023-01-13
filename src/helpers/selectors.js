export function getAppointmentsForDay(state, day) {
  //finding the day object in our state.days array 
  const dayObj = state.days.find(d => d.name === day)
  const results = []

  if (!dayObj) {
    return [];
  }

  for (let id of dayObj.appointments) {
    results.push(state.appointments[id])
  }
  return results

}