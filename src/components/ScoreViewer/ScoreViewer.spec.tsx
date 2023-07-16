import { render } from "@testing-library/react";
import ScoreViewer from "./ScoreViewer";
import { WrapperWithContext } from "../../setupTests";

describe("ScoreViewer", () => {
    const score = 10;

    const wrapper = (
        <WrapperWithContext value={{ score }}>
          <ScoreViewer />
        </WrapperWithContext>
      )

  it("should render the score correctly", () => {
    const { getByText } = render(wrapper);

    expect(getByText("Score")).toBeInTheDocument();
    expect(getByText(score.toString())).toBeInTheDocument();
  });
});