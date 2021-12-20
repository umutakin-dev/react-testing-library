import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header"});
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle ("Header");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-one");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText("/dogs/i");
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getAllByRole("heading");
//   expect(headingElement.length).toBe(2);
// });
