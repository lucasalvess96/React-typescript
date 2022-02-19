import axios from "axios"
import { createContext, useContext } from "react"


function ContextApi() {
    const colors = {
        primary: {
            background: '#7896',
            color: '#fff',
        },

        second: {
            background: '#147',
            color: '#fff',
        }
    }

    const UseColor = createContext(colors.primary)

    function ToolsBars(){
        const checkOut = useContext(UseColor)
        return(
            <button
                style={{background: checkOut.background, color: checkOut.color}}
            >
                check out
            </button>
        )
    }

    return (
        <>
            <UseColor.Provider value={colors.second}>
                <ToolsBars />
            </UseColor.Provider>
        </>
    )

}