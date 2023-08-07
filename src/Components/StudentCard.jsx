import"./StudentCard.css"

const StudentCard = ({ student , setShowDiv , showDiv, index }) => {
    console.log(student)

     const handleShowMore = (index) => {
        setShowDiv(!showDiv)
     };

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
        <div className="rectangle">
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
                        style={{ color: "green", marginLeft: "85px" }}
                    >On Track to Graduate</h3> : <h3 style={{ color: "blue", marginLeft: "5px" }}
                    >NOT on Track to Graduate</h3> }
                    <h4 className="hover" onClick={() => { handleShowMore() }}>Show more...</h4>
            </div>
        </div>
    );
};

export default StudentCard;