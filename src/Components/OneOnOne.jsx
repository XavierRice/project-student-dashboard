import { useState } from "react";
import "./OneOnOne.css"

const OneOnOne = (props) => {

const [nameTag, setNameTag] = useState("")
const [comment, setComment] = useState("")

function handleNameTag(event){
    setNameTag(event.target.value)
}

function handleComment(event){
    setComment(event.target.value)
}

function handleSubmit(event){
event.preventDefault();
setNameTag("")
setComment("")
}


    return (
        <div className="container3">
            <h3><strong>1-on-1 Notes:</strong></h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Commentor Name:
                    <input
                        id="nameTag"
                        name="name"
                        type="text"
                        value={nameTag}
                        onChange={handleNameTag}
                        placeholder="Your name..."
                    />
                </label>
                <br></br>
                <ul></ul>
                <label htmlFor="caption">
                    Comment:
                    <input
                        id="enlargedInput"
                        name="caption"
                        type="text"
                        value={comment}
                        onChange={handleComment}
                        placeholder="Add a brief message..."
                    />
                </label>
                <button
                    type="submit">
                    Submit</button>
            </form>
            <div>
                <p></p>
            </div>
        </div>
    )

}

export default OneOnOne;