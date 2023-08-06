const test = console.log
import { useState } from "react";
import data from "./data/data.json";
import TopBar from "./Components/TopBar";
import ClassList from "./Components/ClassList.jsx";
import StudentCards from "./Components/StudentCards.jsx";
import OneOnOne from "./Components/OneOnOne.jsx";


// <StudentCards data ={selectedStudents}season={selectedSeason}/>
// <ClassList data={data} onSeasonSelect={handleSelectedSeason}/>

function dataSelection(data, selectedSeason) {
  if (selectedSeason === "All") {
    return data;
  } else {
    return data.slice().filter((studentObj) => {
      studentObj.cohort.cohortCode === selectedSeason
    })
  }
}

function App() {

  const [selectedSeason, setSelectedSeason] = useState("");

  const handleSelectedSeason = (season) => {
    setSelectedSeason(season)
  }

  const selectedStudents = dataSelection(data, selectedSeason)

  return (
    <div className="Master">
      <ClassList data={data} onSeasonSelect={handleSelectedSeason} key="list" />
       <StudentCards data ={selectedStudents}season={selectedSeason} key="students"/>
    </div>
  )






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
