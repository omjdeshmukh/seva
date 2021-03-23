import React, { useEffect, useState } from 'react'
import FeedbackCard from './FeedbackCard'
import { getCookieData } from "../../userData"
const cookieData=getCookieData()
const token=cookieData.token
const id=cookieData.userId
//console.log(id)


function ShowFeedback(){
    const [feedback , setFeedback] =useState()

    //  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";
     useEffect(() =>{
         fetch("https://seva-backend1.herokuapp.com/my/feedback"+id,{
            method:"get",
            feedback:feedback,
            headers:{
                "content-type":"application/json",
                "auth-token":`${token}`
            },
         })
            .then((res) =>res.json())
            .then((data) =>setFeedback(data))
            .catch((err) => console.log(err))
     },[])

 console.log(feedback)
  return(
      <div>
            {feedback && feedback.map((item , i) =>{
                return(
                    <FeedbackCard key={item._id} feedbackid={item._id} 
                                                 feedbackinfo={feedback[i].feedback}/>
                )
            })}
      </div>
  )
}
export default ShowFeedback;