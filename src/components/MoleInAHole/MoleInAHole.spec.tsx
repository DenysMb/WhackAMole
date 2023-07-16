import { fireEvent, render, waitFor } from "@testing-library/react";
import { WrapperWithContext } from "../../setupTests";
import MoleInAHole from "./MoleInAHole";

const MOLE_INDEX = 0;
const MOCK_SCORE = 40;

describe('MoleInAHole', () => {
    const score = MOCK_SCORE;
    const setScore = jest.fn();
    const moleToShow = MOLE_INDEX;
    const setMoleToShow = jest.fn();
    
    const wrapper = (
        <WrapperWithContext value={{score, setScore, moleToShow, setMoleToShow}}>
            <MoleInAHole moleIndex={MOLE_INDEX} />
        </WrapperWithContext>
    )

    it('should render mole in a hole correctly', () => {
        const { getByTestId } = render(wrapper);

        expect(getByTestId('mole-in-a-hole')).toBeInTheDocument();
    })

    it('should handle click', async () => {
        const { findByTestId } = render(wrapper);
        
        const moleInAHole = await findByTestId('mole-in-a-hole');

        fireEvent.click(moleInAHole);

        await waitFor(() => {
            expect(setMoleToShow).toBeCalledWith(undefined);
            expect(setScore).toBeCalledWith(MOCK_SCORE + 10);
        });
    });
})