import "./StudentCards.css"

const StudentCards = ({ data, season }) => {

    const StudentCardCreator = data.map((eachStudentObj) => {

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
        }
        const status = eachStudentObj.certifications

        const checkOnTrack = () => {
            if ((status.resume && status.linkedin && status.github && status.mockInterview) === true && eachStudentObj.codewars.current.total > 60) {
                return (
                    <h3
                        style={"color:green"}
                    >On Track to Graduate</h3>
                )
            } else {
                return (
                    <h3
                        style={"color:yellow"}
                    >NOT on Track to Graduate</h3>
                )
            }

        }
        return (
            <div>
                <h1>{seasonFixer}</h1>
                <h3>Total Students:{data.length}</h3>

                <div key={eachStudentObj.id} className="container1">
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
                        <h4 className="hover">Show more...</h4>
                    </div>
                </div>
                <checkOnTrack/>
            </div>
        );
    });
    return StudentCardCreator;
};

export default StudentCards;