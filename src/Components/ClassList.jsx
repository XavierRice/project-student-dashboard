//import data from "./data/data.json"

// const classesList = data.map((student) => student.cohort.cohortCode).filter((season, index, self) => self.indexOf(season) === index)
// const spacedList = classesList.map((strings) => strings.replace(/([a-zA-Z]+)(\d+)/, "$1 $2"))
// const sortedList = spacedList.sort()
// test(sortedList)


import "./ClassList.css"

const ClassList = ({ data }) => {

   const classesList = data.slice().map((student) => student.cohort.cohortCode).filter((season, index, self) => self.indexOf(season) === index) //slicing so i don't mutate the object.maping though to select the season and then filtering out the unique ones.
   const spacedList = classesList.map((strings) => strings.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")) //using RegEx to sort the letters ([a-zA-Z]+) from the digits (\d+) and seperating them one and two
   const sortedList = spacedList.sort() //sorting them alphbetically.

   const list = sortedList.map((season, index) => {    //taking the sorted list and created indv. <h3>tags for each.
      return (
         <>
      <h3 key={index}>{season}</h3>
      <hr size="3" width="90%" color="green"/>  
         </>
      )
   });

   return (
      <div className="container">
         <div className="ClassList">
            <h3>All Students</h3>
            {list}
         </div>
      </div>
   )


}

export default ClassList