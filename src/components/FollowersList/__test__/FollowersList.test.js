import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import FollowersList from "../FollowersList";

jest.mock("axios");

// jest.mock("axios", () => ({
//   __esModule: true,

//   default: {
//     get: () => ({
//       data: {
//         results: [
//           {
//             name: {
//               first: "Umut",
//               last: "Akin",
//             },
//             picture: {
//               large: "https://randomuser.me/api/portraits/men/39.jpg",
//             },
//             login: {
//               username: "umutakin",
//             },
//           },
//         ],
//       },
//     }),
//   },
// }));

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEST");
  });

  beforeAll(() => {
    console.log("RUNNING ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEST");
  });

  afterAll(() => {
    console.log("RUNNING ONCE AFTER ALL TESTS");
  });

  it("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  // it("should render multiple follower items", async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});
