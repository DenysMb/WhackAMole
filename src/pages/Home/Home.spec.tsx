import { render } from "@testing-library/react";
import { WrapperWithContext } from "../../setupTests";
import Home from "./Home";

describe("Home", () => {
  const wasGameStarted = true;

  const wrapper = (
    <WrapperWithContext value={{ wasGameStarted }}>
      <Home />
    </WrapperWithContext>
  );

  it("should render home correctly", () => {
    const { getAllByTestId } = render(wrapper);

    const listOfMoleInAHole = getAllByTestId("mole-in-a-hole");

    expect(listOfMoleInAHole.length).toBe(12);
  });

  it("should show hammer cursor when game started", () => {
    const { getByTestId } = render(wrapper);

    expect(getByTestId("hammer-cursor")).toBeInTheDocument();
  });
});
