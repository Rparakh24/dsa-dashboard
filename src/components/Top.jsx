import React from "react";

function Top(props) {
    return(
        <div className={props.className}>
                <p className={props.pClassname}>{props.text}</p>
        </div>
    )
};
export default Top;