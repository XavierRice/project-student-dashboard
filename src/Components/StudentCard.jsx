import "./StudentCard.css"
import { useState } from "react";

const StudentCard = ({ student, index }) => {
    console.log(student.id)

    const [divThing, setDivThing] = useState(false)
    const [nameTag, setNameTag] = useState("")
    const [comment, setComment] = useState("")
    const [addNote, setAddNote] = useState(student.notes)

    const handleShowMore = (index) => {
        setDivThing(!divThing)
    }

    function handleNameTag(event) {
        setNameTag(event.target.value)
    };

    function handleComment(event) {
        setComment(event.target.value)
    };

    function handleSubmit(event) {
        event.preventDefault();

        const newNote = {
            commenter: nameTag,
            comment: comment,
        };
        setAddNote([...addNote, newNote])
        setNameTag("")
        setComment("")
    }

    const date = new Date(student.dob);                             //learning to use "new"-what creates a new instance of an object.
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",                                                    //setting up my options to use the object formatter
        daySuffix: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("en-us", options);
    const formattedDate = formatter.format(date);

    const resume = student.certifications.resume;
    const linkedIn = student.certifications.linkedin;
    const github = student.certifications.github;
    const mockInt = student.certifications.mockInterview;
    const codeWars = student.codewars.current.total;

    return (
        <div className="component">
            <div className="rectangle" key={student.id}>
                <div className="pictureBox">
                    <img alt="studentImg" src={student.profilePhoto}></img>
                </div>
                <div className="textBox">
                    <h3>
                        {student.names.preferredName}{" "}
                        {student.names.middleName.slice(0, 1).toUpperCase()}.{" "}
                        {student.names.surname}
                    </h3>
                    <h4>{student.username}</h4>
                    <h4>Birthday: {formattedDate}</h4>
                    {(resume && linkedIn && github && mockInt) && codeWars > 600 ? <h3
                        style={{ color: "green", marginLeft: "5px" }}
                    >On Track to Graduate</h3> : <h3 style={{ color: "blue", marginLeft: "5px" }}
                    >NOT on Track to Graduate</h3>}
                    <h4 className="hover" onClick={() => { handleShowMore(index) }}>{divThing === false ? "Show More" : "Close"}</h4>
                </div>
                {divThing && (
                    <div className="details">
                        <div >
                            <p>Resume Certification Status: {" "}
                                {student.certifications.resume ? "👌🏾" : "❌"} </p>
                            <p>LinkedIn Profile Status: {" "}
                                {student.certifications.linkedin ? "👌🏾" : "❌"} </p>
                            <p>GitHub Profile Status:{" "}
                                {student.certifications.github ? "👌🏾" : "❌"} </p>
                            <p>Mock Interview Status:{" "}
                                {student.certifications.mockInterview ? "👌🏾" : "❌"}  </p>
                            <p>CodeWars Status: {" "}
                                {student.codewars.current.total > 600 ? "👌🏾" : "❌"} </p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>SCORES:</strong></p>
                            <p>Projects:{(student.cohort.scores.projects * 100).toFixed(2)}%</p>
                            <p>Assignments:{(student.cohort.scores.assignments * 100).toFixed(2)}%</p>
                            <p>Total:{(student.cohort.scores.assessments * 100).toFixed(2)}%</p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>CODEWARS:</strong></p>
                            <p>Current Total:{" "}{student.codewars.current.total}</p>
                            <p>Last Week:{" "}{student.codewars.current.lastWeek}</p>
                            <p>Goal:{" "}{student.codewars.goal.total}</p>
                            <p>Percent Reach:{" "}{(student.codewars.current.total / student.codewars.goal.total).toFixed(2) * 100}%</p>
                            <hr size="3" width="90%" color="green" />
                            <p><strong>NOTES:</strong></p>
                            <p>{student.notes.map((note, i) =>(
                                <>
                                <h4 key={i}>Instructor: {note.commenter}</h4>
                                <h4 key={i}>Comment: {note.comment}</h4>
                                </>
                            ))}</p>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default StudentCard;