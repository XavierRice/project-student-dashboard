import { useState } from "react";
import "./ClassList.css";

const ClassList = ({ data, onSeasonSelect }) => {

   const [selection, setSelection] = useState("")
 //  console.log(selection)

   function handleSeason(event) {

      const splitWords = event.target.innerText.split(" ")
      const theSelection = `${splitWords[0]}${splitWords[1]}`
      setSelection(theSelection)
      onSeasonSelect(theSelection)
   }

 function handleAll(event){
    setSelection("All")
    onSeasonSelect("All")

 }

   const classesList = data.slice().map((student) => student.cohort.cohortCode).filter((season, index, self) => self.indexOf(season) === index) //slicing so i don't mutate the object.maping though to select the season and then filtering out the unique ones.
   const spacedList = classesList.map((strings) => strings.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")) //using RegEx to sort the letters ([a-zA-Z]+) from the digits (\d+) and seperating them one and two
   const sortedList = spacedList.sort() //sorting them alphbetically.

   const list = sortedList.map((season, index) => {    //taking the sorted list and created indv. <h3>tags for each.
      return (
         <>
            <div className="ClassCard" onClick={handleSeason} key={index} >
               <hr size="3" width="90%" color="green" />
               <h3 key={index} value={season} >{season}</h3>
            </div>
         </>
      )
   });

   return (
      <div className="container2" key="classBox" >
         <div className="ClassList" >
            <h3 onClick={handleAll} >All Students</h3>
            {list}
         </div>
      </div>
   )
}

export default ClassList