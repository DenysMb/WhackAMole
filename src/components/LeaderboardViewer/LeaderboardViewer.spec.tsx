import { render } from "@testing-library/react";
import { WrapperWithContext } from "../../setupTests";
import LeaderboardViewer, { MOCK_SCORES } from "./LeaderboardViewer";

describe('LeaderboardViewer', () => {
    const wrapper = (
        <WrapperWithContext>
            <LeaderboardViewer />
        </WrapperWithContext>
    )

    it('should render leaderboard viewer correctly', () => {
        const { getByText } = render(wrapper)

        expect(getByText(MOCK_SCORES[0].name)).toBeInTheDocument()
        expect(getByText(MOCK_SCORES[0].score)).toBeInTheDocument()
    })
})