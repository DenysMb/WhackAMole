import "@testing-library/jest-dom";

import AppContext, { AppContextProps } from "./context/AppContext";

export const mockContextValues: AppContextProps = {
    wasGameFinished: false,
    wasGameStarted: false,
    moleToShow: undefined,
    setMoleToShow: jest.fn(),
    score: 0,
    setScore: jest.fn()
}

export const WrapperWithContext = ({children, value = {}}: {children: React.ReactNode, value?: Partial<AppContextProps>}) => (
    <AppContext.Provider value={{...mockContextValues, ...value}}>
        {children}
      </AppContext.Provider>
)