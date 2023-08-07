import { useState } from "react";
import "./StudentList.css"
import StudentCard from "./StudentCard";

const StudentList = ({ data }) => {

    const [nameTag, setNameTag] = useState("")
    const [comment, setComment] = useState("")
    const [showDiv, setShowDiv] = useState(false)

    const handleShow = (index) => {
        setShowDiv(index)
    };

    function handleNameTag(event) {
        setNameTag(event.target.value)
    };

    function handleComment(event) {
        setComment(event.target.value)
    };

    function handleSubmit(event) {
        event.preventDefault();
        setNameTag("")
        setComment("")
    };

    const StudentCardCreator = data.map((eachStudentObj, index) => {

       

        return (
            <> 
            <div>
                <StudentCard key={eachStudentObj.id} student={eachStudentObj} setShowDiv={setShowDiv} showDiv={showDiv} index={index} />
                {showDiv && (
                    <div className="details">
                        <div >
                            <p>Resume Certification Status: {" "}
                                {eachStudentObj.certifications.resume ? "👌🏾" : "❌"} </p>
                            <p>LinkedIn Profile Status: {" "}
                                {eachStudentObj.certifications.linkedin ? "👌🏾" : "❌"} </p>
                            <p>GitHub Profile Status:{" "}
                                {eachStudentObj.certifications.github ? "👌🏾" : "❌"} </p>
                            <p>Mock Interview Status:{" "}
                                {eachStudentObj.certifications.mockInterview ? "👌🏾" : "❌"}  </p>
                            <p>CodeWars Status: {" "}
                                {eachStudentObj.codewars.current.total > 600 ? "👌🏾" : "❌"} </p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>SCORES:</strong></p>
                            <p>Projects:{(eachStudentObj.cohort.scores.projects * 100).toFixed(2)}%</p>
                            <p>Assignments:{(eachStudentObj.cohort.scores.assignments * 100).toFixed(2)}%</p>
                            <p>Total:{(eachStudentObj.cohort.scores.assessments * 100).toFixed(2)}%</p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>CODEWARS:</strong></p>
                            <p>Current Total:{" "}{eachStudentObj.codewars.current.total}</p>
                            <p>Last Week:{" "}{eachStudentObj.codewars.current.lastWeek}</p>
                            <p>Goal:{" "}{eachStudentObj.codewars.goal.total}</p>
                            <p>Percent Reach:{" "}{(eachStudentObj.codewars.current.total / eachStudentObj.codewars.goal.total).toFixed(2) * 100}%</p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>NOTES:</strong></p>
                            <p>Instructor:{eachStudentObj.notes.commenter}</p>
                            <p>Comment:{eachStudentObj.notes.comments}</p>
                        </div>
                        <div className="container3">
                            <h3><strong>1-on-1 Notes:</strong></h3>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">
                                    Commentor Name:
                                    <input
                                        id="nameTag"
                                        name="name"
                                        type="text"
                                        value={nameTag}
                                        onChange={handleNameTag}
                                        placeholder="Your name..."
                                    />
                                </label>
                                <br></br>
                                <ul></ul>
                                <label htmlFor="caption">
                                    Comment:
                                    <input
                                        id="enlargedInput"
                                        name="caption"
                                        type="text"
                                        value={comment}
                                        onChange={handleComment}
                                        placeholder="Add a brief message..."
                                    />
                                </label>
                                <button
                                    type="submit">
                                    Submit</button>
                            </form>
                            <h4 className="hover" onClick={() => { handleShow() }}>Show less...</h4>
                        </div>
                    </div>
                )}
                </div>
            </>
        );
    });

    return StudentCardCreator;
};

export default StudentList;