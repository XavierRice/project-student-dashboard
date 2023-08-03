import data from "./data/data.json"
//import ClassList from "./Components/ClassList"


let test = console.log

const classesList = data.map((student) => student.cohort.cohortCode).filter((season, index, self) => self.indexOf(season) === index)
const spacedList = classesList.forEach((season) => season.replace(/([a-zA-Z]+)(\d+)/, "$1 $2"))
test(spacedList)

// for(let i =0; i < classesList.length; i++){
//  let broken = classesList[i].replace(/([a-zA-Z]+)(\d+)/, "$1 $2")
//  test(broken)
// }


function App() {
 return <h1>X</h1>




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
