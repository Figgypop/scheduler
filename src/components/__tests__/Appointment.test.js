import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import Form from "components/Appointment/Form";
import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appointment", () => {

  it("renders without crashing", () => {
    render(<Appointment
    />);
  });


})
