import {createContext} from "react";


const Typingboxcontext = createContext();

export const TypingboxProvider = ({children}) => {
    return (
        <Typingboxcontext.Provider>
        {children}
        </Typingboxcontext.Provider>
    );
}
