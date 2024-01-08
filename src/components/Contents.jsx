import React from "react";

function Contents(props) {
    let questions = [ {sno:"1", title:"two sum", solution:"1", acceptance:"51%", difficulty:"Hard"}]
    return(
        questions.map((question) => {
        <div>
            <div className="content-box">
                <div className="content"><p className="content-sno">{question.sno}</p></div>
                <div className="content"><p className="content-title">{question.title}</p></div>
                <div className="content"><p className="content-tag">{question.tag}</p></div>
                <div className="content"><p className="content-solution">{question.solution}</p></div>
                <div className="content"><p className="content-acceptance">{question.acceptance}</p></div>
                <div className="content"><p className="content-difficulty">{question.difficulty}</p></div>
                <div className="content"><p className="content-frequency">{question.frequency}</p></div>
            </div>
        </div>}
    ))
}

export default Contents;