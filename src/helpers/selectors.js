export function getAppointmentsForDay(state, day) {

  const dayObj = state.days.find(d => d.name === day);
  const results = [];

  if (!dayObj) {
    return [];
  }

  for (let id of dayObj.appointments) {
    results.push(state.appointments[id])
  }
  return results
};

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const student = interview.student;
  const interviewer = state.interviewers[interview.interviewer];

  return { student, interviewer: { ...interviewer } }
};

export function getInterviewersForDay(state, day) {
  const dayObj = state.days.find(d => d.name === day);

  if (!dayObj) {
    return [];
  }

  const results = []

  for (let id of dayObj.interviewers) {
    results.push(state.interviewers[id])
  }

  return results
};