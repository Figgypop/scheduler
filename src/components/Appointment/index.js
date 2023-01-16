import React from "react";

import "components/Appointment/styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING"
  const DELETING = "DELETING"
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT"
  const ERROR_SAVE = "ERROR_SAVE"
  const ERROR_DELETE = "ERROR_DELETE"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY);


  const save = function (name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  const deleteInterview = function () {
    transition(DELETING)
    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true))

  }

  const confirmDelete = function () {
    transition(CONFIRM)
  }


  return (
    <article className="appointment">
      <Header
        time={props.time}
      />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDelete}
          onEdit={() => transition(EDIT)}
        />
      )}

      {mode === CREATE && <Form
        onCancel={back}
        interviewers={props.interviewers}
        onSave={save}
      />}

      {mode === SAVING && <Status
        message={"SAVING"}
      />}

      {mode === DELETING && <Status
        message={"DELETING"}
      />}

      {mode === CONFIRM && <Confirm
        onCancel={back}
        onConfirm={deleteInterview}
        message={"Do you wish to delete this appointment?"}
      />}

      {mode === EDIT && <Form
        onCancel={back}
        onSave={save}
        interviewers={props.interviewers}
        interviewer={props.interview.interviewer.id}
        student={props.interview.student}
      />}

      {mode === ERROR_SAVE &&
        <Error
          message="Error could not save"
          onClose={back}
        />}

      {mode === ERROR_DELETE &&
        <Error
          message="Error could not delete"
          // USE ()=> TO CALL LATER
          onClose={() => transition(SHOW, true)}
        />}

    </article>
  )
}
