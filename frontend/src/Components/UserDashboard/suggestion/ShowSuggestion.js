import React, { useEffect, useState } from 'react'
import SuggestionCard from './SuggestionsCard'
import { getCookieData } from '../../userData'

const cookieData=getCookieData()
const token=cookieData.token
const id=cookieData.userId
console.log(id)



function ShowSuggestion() {
    const [suggestions, setSuggestions] = useState()

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGNjMWZkNDNlODI4MjJhODU3ODZlNiIsImlhdCI6MTYxNTk5MDc1NH0.fjlkDknRnl1MBC2gJMLFRpo4pZdQJADO5DGe3OGY1oA";
   

    useEffect(() => {
        fetch("https://seva-backend1.herokuapp.com/user/my/suggestion/"+id, {
            method: "get",
            data: suggestions,
            headers: {
                "content-type": "application/json",
                "auth-token": `${token}`
            },
        })
            .then((res) => res.json())
            .then((data) => setSuggestions(data))
            .catch((err) => console.log(err))
    }, [])
    if(id===undefined){
        console.log("suggestions are not added by the user")
    }
     //  console.log(suggestions)
    return (
        <div>
            {suggestions && suggestions.map((item, i) => {
               //  console.log(item)
                 return (<SuggestionCard key={item._id} suggestionid={suggestions[i]._id}
                     servicetype={suggestions[i].ServiceType}
                     categoryName={ suggestions[i].category.category }
                     servicedescription={suggestions[i].ServiceDescription} />)

            })}
        </div>
    )
}
export default ShowSuggestion