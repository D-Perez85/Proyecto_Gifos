import React from "react"; 
function Button({isDarkMode, setIsDarkMode, setDark}){
    return(
        <button 
        onClick={(e)=>{
            setIsDarkMode(!isDarkMode);
            setDark(isDarkMode);}}
        className="btn-header">
            MODO {isDarkMode ? "DARK" : "LIGHT"}
</button>
    )
}
export default Button; 