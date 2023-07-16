import { render } from "@testing-library/react";
import { WrapperWithContext } from "../../setupTests";
import HammerCursor from "./HammerCursor";

const MOCK_HAMMER_POSITION = { x: 50, y: 50 };
const MOCK_HAMMER_ROTATION = 45;

describe('HammerCursor', () => {
  const wrapper = (
    <WrapperWithContext>
      <HammerCursor hammerPosition={MOCK_HAMMER_POSITION} hammerRotation={MOCK_HAMMER_ROTATION} />
    </WrapperWithContext>
  )

  it("should render hammer cursor correctly", () => {
    const { getByTestId } = render(wrapper);

    expect(getByTestId('hammer-cursor')).toBeInTheDocument();
  });
});