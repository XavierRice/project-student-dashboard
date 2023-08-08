
import "./StudentList.css"
import StudentCard from "./StudentCard";

const StudentList = ({ data, season }) => {
 const StudentCardCreator = data.map((eachStudentObj, index) => (

        <div >
            <StudentCard key={eachStudentObj.id} student={eachStudentObj} index={index} />
        </div>
        ));
  
         return (
            <>
           <span className="seasons">{season === "All" ? "All Students" : season.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")}: </span>
          <h3 className="total">Total Students:{data.length}</h3>
          <div className="studentList">{StudentCardCreator}</div>
            </>
         )
        }

export default StudentList;