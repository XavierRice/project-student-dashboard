import data from "./data/data.json"

const classesList = data.map((student) => student.cohort.cohortCode).filter((season, index, self) => self.indexOf(season) === index)
console.log(classesList)




const ClassList = () => {

   return <div>{classesList}</div>


}

export default ClassList