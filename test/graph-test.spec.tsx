import "@testing-library/jest-dom";
import { RootComponent } from "../src/RootComponent";
import { render } from "@testing-library/react";

describe("graph test", () => {
  test("should render", () => {
    const { getByText } = render(<RootComponent />);
    expect(getByText("test")).toBeInTheDocument();
  });
});
