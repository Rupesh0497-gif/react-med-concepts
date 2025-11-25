import { describe, beforeEach,test, expect,jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "../steps/Step1";
import { FormContext } from "../context/FormContext";
import { BrowserRouter } from "react-router-dom";

// mock navigate
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

// Wrapper for context + router
const Wrapper = ({ children, contextValue }) => (
  <FormContext.Provider value={contextValue}>
    <BrowserRouter>{children}</BrowserRouter>
  </FormContext.Provider>
);

describe("Step1 Component Tests", () => {
  let defaultContext;

  beforeEach(() => {
    defaultContext = {
      formData: {
        legalentityname: "",
        dbaname: "",
        firstname: "",
        lastname: "",
        title: "",
        workphone: "",
        cellphone: "",
        email: ""
      },
      setFormData: jest.fn(),
    };
    mockedNavigate.mockReset();
  });

  test("renders Step1 with required fields", () => {
    render(<Step1 />, {
      wrapper: ({ children }) => (
        <Wrapper contextValue={defaultContext}>{children}</Wrapper>
      ),
    });

    expect(screen.getByText("Identify Healthcare Organization")).toBeInTheDocument();
    expect(screen.getByLabelText("Legal Entity Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Doing Business As (d/b/a) Name")).toBeInTheDocument();
  });

  test("typing into input updates value", () => {
    render(
      <Wrapper contextValue={defaultContext}>
        <Step1 />
      </Wrapper>
    );

    const legalInput = screen.getByLabelText("Legal Entity Name");
    fireEvent.change(legalInput, { target: { value: "DNV Health" } });
    expect(legalInput.value).toBe("DNV Health");
  });

  test("blur validation shows error for invalid firstname", () => {
    render(
      <Wrapper contextValue={defaultContext}>
        <Step1 />
      </Wrapper>
    );

    const firstInput = screen.getByLabelText("First Name");

    fireEvent.change(firstInput, { target: { value: "123" } });
    fireEvent.blur(firstInput);

    expect(screen.getByText("Please enter a valid first name.")).toBeInTheDocument();
  });

  test("checkbox copies legalentityname to dbaname", () => {
    const filledContext = {
      formData: {
        legalentityname: "DNV Group",
        dbaname: "",
      },
      setFormData: jest.fn(),
    };

    render(
      <Wrapper contextValue={filledContext}>
        <Step1 />
      </Wrapper>
    );

    const checkbox = screen.getByRole("checkbox", { name: "" });

    fireEvent.click(checkbox);

    const dbaInput = screen.getByLabelText("Doing Business As (d/b/a) Name");
    expect(dbaInput.value).toBe("DNV Group");
  });

  test("does NOT navigate on submit when fields are empty", () => {
    render(
      <Wrapper contextValue={defaultContext}>
        <Step1 />
      </Wrapper>
    );

    const submitBtn = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(submitBtn);

    expect(mockedNavigate).not.toHaveBeenCalled();
  });

  test("navigates when all fields valid", () => {
    const completeContext = {
      formData: {},
      setFormData: jest.fn(),
    };

    render(
      <Wrapper contextValue={completeContext}>
        <Step1 />
      </Wrapper>
    );

    // Fill all inputs with valid data
    fireEvent.change(screen.getByLabelText("Legal Entity Name"), {
      target: { value: "DNV" },
    });
    fireEvent.change(screen.getByLabelText("Doing Business As (d/b/a) Name"), {
      target: { value: "DNV Health" },
    });
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "Rupesh" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Kumar" },
    });
    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Engineer" },
    });
    fireEvent.change(screen.getByLabelText("Work Phone"), {
      target: { value: "4482299858" },
    });
    fireEvent.change(screen.getByLabelText("Cell Phone"), {
      target: { value: "4482299858" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@test.com" },
    });

    const submitBtn = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(submitBtn);

    expect(mockedNavigate).toHaveBeenCalledWith(
      "/react-med-concepts/facilitydetails"
    );
  });
});
