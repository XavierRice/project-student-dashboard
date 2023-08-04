import data from "./data/data.json";
import ClassList from "./Components/ClassList";

function App() {
  const StudentsNames = data.map((eachStudentObj) => {

    
     
       const date = new Date(eachStudentObj.dob)
       const options = {
           month: 'long',
           day: 'numeric',
           daySuffix: 'numeric',         
       }

       const formatter = new Intl.DateTimeFormat('en-us', options)
       const formattedDate = formatter.format(date)



    return (
      <>
        <h3>{eachStudentObj.names.preferredName} {eachStudentObj.names.middleName.slice(0,1).toUpperCase()}. {eachStudentObj.names.surname}</h3>
        <h4>{eachStudentObj.username}</h4>
        <h4>Birthday: {formattedDate}</h4>

      </>
    );
  });

  return (
    <>
      <h1>Student Dashboard</h1>
      {StudentsNames}
    </>
  );
}

export default App;

/*const example = {
    "id": "D8-hEWB",
    "names": {
      "preferredName": "Israel",
      "middleName": "Benjamin",
      "surname": "Rodriguez"
    },
    "username": "israel.rodriguez@pursuit.org",
    "dob": "2/3/1979",
    "profilePhoto": "https://xsgames.co/randomusers/avatar.php?g=male&minimum_age=38&maximum_age=48",
    "codewars": {
      "current": { "total": 1804, "lastWeek": 144 },
      "goal": { "total": 850, "lastWeek": 75 }
    },
    "certifications": {
      "resume": false,
      "linkedin": false,
      "github": false,
      "mockInterview": false
    },
    "notes": [
      {
        "commenter": "Alan R.",
        "comment": "Israel is a pleasure to work with!"
      }
    ],
    "cohort": {
      "cohortCode": "Winter2025",
      "cohortStartDate": "12/1/25",
      "scores": { "assignments": 0.71, "projects": 0.7, "assessments": 0.66 }
    }
  },*/
