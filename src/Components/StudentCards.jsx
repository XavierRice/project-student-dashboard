import { useState } from "react";
import StudentCard from "./StudentCard";

//   <h1>{seasonFixer(season)}</h1>
//  <h3>Total Students:{data.length}</h3>

// const [showDivs, setShowDivs] = useState(data.map(() => false));       // CHATGPT helped me expand this into and infinte loop....

//     const handleShowMore = (index) => {
//         setShowDivs((states) => states.map((state, i) => (i === index ? !state : state))
//         );
//     };

const StudentCards = ({ data, season }) => {

    const [showDiv, setShowDiv] = useState(false)
    const [nameTag, setNameTag] = useState("")
    const [comment, setComment] = useState("")
    
    const handleShow = () => {
      setShowDiv(!showDiv)
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

        // const date = new Date(eachStudentObj.dob);                             //learning to use "new"-what creates a new instance of an object.
        // const options = {
        //     year: "numeric",
        //     month: "long",
        //     day: "numeric",                                                    //setting up my options to use the object formatter
        //     daySuffix: "numeric",
        // };
        // const formatter = new Intl.DateTimeFormat("en-us", options);
        // const formattedDate = formatter.format(date);


        // const seasonFixer = (season) => {                                      // moved out can cut?
        //     if (season === "All") {
        //         return "All Students"
        //     } else {
        //         return season.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")
        //     }
        // };

        // const CheckOnTrack = () => {

        //     const status = eachStudentObj.certifications

        //     if ((status.resume && status.linkedin && status.github && status.mockInterview) === true && eachStudentObj.codewars.current.total > 60) {
        //         return (
        //             <h3
        //                 style={{ color: "green", marginLeft: "125px" }}
        //             >On Track to Graduate</h3>
        //         )
        //     } else {
        //         return (
        //             <h3 style={{ color: "blue", marginLeft: "85px" }}
        //             >NOT on Track to Graduate</h3>
        //         );
        //     };

        // };
        return (
            <>
                <StudentCard key={eachStudentObj.id} student={eachStudentObj} setShowDiv={setShowDiv} />
                {/* <h4 className="hover" onClick={() => { handleShowMore() }}>Show more...</h4> */}
                {showDiv && (
                   <div>
                    <div className="details">
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
                        <p>Percent Reach:{" "}{(eachStudentObj.codewars.current.total / eachStudentObj.codewars.goal.total) * 100}%</p>
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
            </>
        );
    });

    return StudentCardCreator;
};

export default StudentCards;