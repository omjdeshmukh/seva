import React, { useEffect, useState } from "react";
import { getCookieData } from "../../userData";
import SuggestionCard from "./SuggestionsCard";

function ShowSuggestion({ pincode, token, userId, role }) {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    fetch(`https://seva-backend1.herokuapp.com/user/my/suggestion/${userId}`, {
      method: "GET",
      headers: {
        "auth-token": `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  });

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
