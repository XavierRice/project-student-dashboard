import { useState } from "react";
import "./StudentCards.css"

//   <h1>{seasonFixer(season)}</h1>
//  <h3>Total Students:{data.length}</h3>



const StudentCards = ({ data, season }) => {
    
    const [showDivs, setShowDivs] = useState(data.map(() => false));       // CHATGPT helped me expand this into and infinte loop....

    const handleShowMore = (index) => {
        setShowDivs((states) => states.map((state, i) => (i === index ? !state : state))
        );
    };
                                                                           //=========================================================
    const StudentCardCreator = data.map((eachStudentObj, index) => {

        const date = new Date(eachStudentObj.dob);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            daySuffix: "numeric",
        };
        const formatter = new Intl.DateTimeFormat("en-us", options);
        const formattedDate = formatter.format(date);


        const seasonFixer = (season) => {
            if (season === "All") {
                return "All Students"
            } else {
                return season.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")
            }
        };

        const CheckOnTrack = () => {

            const status = eachStudentObj.certifications

            if ((status.resume && status.linkedin && status.github && status.mockInterview) === true && eachStudentObj.codewars.current.total > 60) {
                return (
                    <h3
                        style={{ color: "green", marginLeft: "125px" }}
                    >On Track to Graduate</h3>
                )
            } else {
                return (
                    <h3 style={{ color: "blue", marginLeft: "85px" }}
                    >NOT on Track to Graduate</h3>
                );
            };

        };
        return (
            <div className="container1" key={eachStudentObj.id}>
                <div>
                    <div className="pictureBox">
                        <img alt="studentImg" src={eachStudentObj.profilePhoto}></img>
                    </div>
                    <div className="textBox">
                        <h3>
                            {eachStudentObj.names.preferredName}{" "}
                            {eachStudentObj.names.middleName.slice(0, 1).toUpperCase()}.{" "}
                            {eachStudentObj.names.surname}
                        </h3>
                        <h4>{eachStudentObj.username}</h4>
                        <h4>Birthday: {formattedDate}</h4>
                        <h4 className="hover" onClick={handleShowMore(index)}>Show more...</h4>
                        {showDivs && (
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
                                <p>Current Total:{eachStudentObj.codewars.current.total}</p>
                                <p>Last Week:{eachStudentObj.codewars.current.lastWeek}</p>
                                <p>Goal:{eachStudentObj.codewars.goal.total}</p>
                                <p>Percent Reach:{(eachStudentObj.codewars.current.total/eachStudentObj.codewars.goal.total)*100}%</p>
                                <hr size="3" width="90%" color="green" /> 
                                <p><strong>NOTES:</strong></p>
                                <p>Instructor:{eachStudentObj.notes.commenter}</p>
                                <p>Comment:{eachStudentObj.notes.comments}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="status">
                    <CheckOnTrack />
                </div>
            </div>
        );
    });

    return StudentCardCreator;
};

export default StudentCards;