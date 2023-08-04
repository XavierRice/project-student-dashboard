import "./StudentCards.css"

const StudentCards = ({ data }) => {

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

        return (
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
        );
    });
    return StudentCardCreator;
};

export default StudentCards;