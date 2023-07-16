import { render } from "@testing-library/react";
import { WrapperWithContext } from "./setupTests";
import App from "./App";

const MOCK_SCORE = 0;

describe("App", () => {
  const score = MOCK_SCORE;
  const wasGameStarted = false;
  const wasGameFinished = true;

  const wrapper = (
    <WrapperWithContext
      value={{
        score,
        wasGameFinished,
        wasGameStarted,
      }}
    >
      <App />
    </WrapperWithContext>
  );

  it("should render app with start button", () => {
    const { getByText } = render(wrapper);

    expect(getByText("Start")).toBeInTheDocument();
  });

//   it("should render app with finished label", () => {
//     const { getByText } = render(wrapper);

//     expect(getByText("Finished!")).toBeInTheDocument();
//   });
});
