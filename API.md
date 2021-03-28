# API for SEVA APP (https://seva-backend1.herokuapp.com)

## Register

1. ``` POST``` https://seva-backend1.herokuapp.com/register
```
{
    "userName" : "bhupendra",
    "fullName" : "user bhupendra ",
    "email":"provider1@gmail.com",
    "img":"https://res.cloudinary.com/drampnn2w/image/upload/v1615808628/user_iapj1a.tiff"
    "password":"12345678",
    "role": "provider",
    "state": "MH",
    "city": "pune",
    "village": "katraj",
    "pincode": "411048"
}
```

## login

2. ``` POST``` https://seva-backend1.herokuapp.com/login
```
{
    "email":"provider1@gmail.com",
    "password": "12345678"
}

```

## User dashboard

3. ``` GET``` https://seva-backend1.herokuapp.com/user

```
Header : 
    auth-token - token-value
```

## Provider dashboard

4. ``` GET``` https://seva-backend1.herokuapp.com/provider

```
Header : 
    auth-token - token-value
```

## Admin dashboard

5. ``` GET``` https://seva-backend1.herokuapp.com/admin

```

```

## feedback

6. ``` GET``` https://seva-backend1.herokuapp.com/feedback


7. ``` GET``` https://seva-backend1.herokuapp.com/feedback/:feedbackId


8. ```GET``` https://seva-backend1.herokuapp.com/user/my/feedback/:userId

```
Header : 
    auth-token - token-value
```

```

```

9. ```POST``` https://seva-backend1.herokuapp.com/user/feedback

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```

10. ```PUT``` https://seva-backend1.herokuapp.com/user/feedback/:feedbackId

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```


11. ```DELETE``` https://seva-backend1.herokuapp.com/user/feedback/:feedbackId

```
Header : 
    auth-token - token-value
```

## category

12. ``` GET``` https://seva-backend1.herokuapp.com/admin/category

```

```

13. ``` GET``` https://seva-backend1.herokuapp.com/admin/category/:categoryId

```

```

14. ``` POST``` https://seva-backend1.herokuapp.com/admin/category

```
{
    "icon":"https://res.cloudinary.com/drampnn2w/image/upload/v1615808107/Healthicon_ih06eq.png",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

15. ``` PUT``` https://seva-backend1.herokuapp.com/admin/category/:Id

```
{
    "icon":"https://res.cloudinary.com/drampnn2w/image/upload/v1615808107/Healthicon_ih06eq.png",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

16. ``` DELETE``` https://seva-backend1.herokuapp.com/admin/category/:Id

```

```

## Service (Provider)

17. ``` GET``` https://seva-backend1.herokuapp.com/service

```

```

18. ``` GET``` https://seva-backend1.herokuapp.com/seriveBycategory/:categoryId

```

```

19. ``` GET``` https://seva-backend1.herokuapp.com/seriveBycategoryAndPin/:categoryId/:pin

```

```

20. ``` GET``` https://seva-backend1.herokuapp.com/service/:serviceId

```

```

21. ``` GET``` https://seva-backend1.herokuapp.com/serviceByPin/:pincode

```

```

22. ``` GET``` https://seva-backend1.herokuapp.com/VerifiedService

```

```

23. ``` GET``` https://seva-backend1.herokuapp.com/provider/my/service/:Id

```
Header : 
    auth-token - token-value
```


24. ``` POST``` https://seva-backend1.herokuapp.com/provider/service

```

Header : 
    auth-token - token-value
```

```
{
        "image": "sdfsd",
        "serviceNames": " new provider demo",
        "serviceEmail": "provider1@gmail.com",
        "servicePincode":"411048",
        "category": "604cdf8b0bc38c07e8a6fd94",
        "contactNo": "+91844******9",
        "map_location": "map location",
        "description": "sadfsdf"
}
```

25. ``` PUT``` https://seva-backend1.herokuapp.com/provider/service/:Id

```
Header : 
    auth-token - token-value
```

```
{
        "image": "sdfsd",
        "serviceNames": " new provider demo",
        "serviceEmail": "provider1@gmail.com",
        "servicePincode":"411048",
        "category": "604cdf8b0bc38c07e8a6fd94",
        "contactNo": "+91844******9",
        "map_location": "map location",
        "description": "sadfsdf"
}
```

26. ``` DELETE``` https://seva-backend1.herokuapp.com/provider/service/:Id

```
Header : 
    auth-token - token-value
```



## User Suggestiom

27. ``` GET``` https://seva-backend1.herokuapp.com/suggestionBycategory/:categoryId

```

```

28. ``` GET``` https://seva-backend1.herokuapp.com//VoteSuggestion/:suggestionId

```

```
29. ``` GET``` https://seva-backend1.herokuapp.com/s/suggestionBycategoryAndPin/:categoryId/:pin

```

```
30. ``` GET``` https://seva-backend1.herokuapp.com/suggestion/:suggestionId

```

```
31. ``` GET``` https://seva-backend1.herokuapp.com/suggestion

```

```

32. ``` GET``` https://seva-backend1.herokuapp.com/suggestionByPincode/:pincode

```

```
33. ``` GET``` https://seva-backend1.herokuapp.com/validSuggestion

```

```

34. ``` GET``` https://seva-backend1.herokuapp.com/user/my/suggestion/:userId

```
Header : 
    auth-token - token-value
```

```

```

35. ``` GET``` https://seva-backend1.herokuapp.com/user/my/suggestion/:userId

```
Header : 
    auth-token - token-value
```

```
https://seva-backend1.herokuapp.com/user/my/suggestion/604cc1fd43e82822a85786e6
user id - 604cc1fd43e82822a85786e6
```

36. ``` POST``` https://seva-backend1.herokuapp.com/user/suggestion

```
Header : 
    auth-token - token-value
```

```
{
    "ServiceType": "chai`s shop",
    "ServicePinCode": "411046",
    "category": "604cdf8b0bc38c07e8a6fd94",
    "ServiceDescription": "Service Description"
}
```


37. ``` PUT``` https://seva-backend1.herokuapp.com/user/suggestion/:suggestionId

```
Header : 
    auth-token - token-value
```

```
   "ServiceType": "chai`s shop",
    "ServicePinCode": "411046",
    "category": "604cdf8b0bc38c07e8a6fd94",
    "ServiceDescription": "Service Description"
```

38. ``` DELETE``` https://seva-backend1.herokuapp.com/user/suggestion/:suggestionId

```
Header : 
    auth-token - token-value
```

```

```
## Admin all user

39. ``` GET``` https://seva-backend1.herokuapp.com/admin/alluser

```

```

## User Profile 

40. ``` GET``` https://seva-backend1.herokuapp.com/user/profile/:profileId

```

```

41. ``` PUT``` https://seva-backend1.herokuapp.com/user/profile/:profileId

```
Header : 
    auth-token - token-value
```


```
    "fullName" : "user bhupendra ",
    "state": "MH",
    "city": "pune",
    "village": "katraj",
    "pincode": "411048"
```
42. ``` DELETE``` https://seva-backend1.herokuapp.com/user/profile/:profileId

```
Header : 
    auth-token - token-value
```

```

```

## Provider Profile 

43. ``` GET``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

```

```

44. ``` PUT``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

```
Header : 
    auth-token - token-value
```


```
    "fullName" : "user bhupendra ",
    "state": "MH",
    "city": "pune",
    "village": "katraj",
    "pincode": "411048"
```
45. ``` DELETE``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

```
Header : 
    auth-token - token-values
```

```

```









