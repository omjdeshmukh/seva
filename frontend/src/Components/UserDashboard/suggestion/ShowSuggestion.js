import React, { useEffect, useState } from "react";
import { getCookieData } from "../../userData";
import SuggestionCard from "./SuggestionsCard";

function ShowSuggestion() {
  const [suggestions, setSuggestions] = useState();

  const cookieData = getCookieData();
  const token = cookieData.token;
  const _id = cookieData.userId;

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/user/my/suggestion/${_id}`, {
      method: "get",
      suggestions: suggestions,
      headers: {
        "content-type": "application/json",
        "auth-token": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  });

  //   console.log(suggestions)
  return (
    <div>
      {suggestions &&
        suggestions.map((item, i) => {
          return (
            <SuggestionCard
              key={item._id}
              suggestionid={suggestions[i]._id}
              servicetype={suggestions[i].ServiceType}
              categoryName={suggestions[i].category.category}
              servicedescription={suggestions[i].ServiceDescription}
            />
          );
        })}
    </div>
  );
}
export default ShowSuggestion;
