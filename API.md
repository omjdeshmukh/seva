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

4. ``` GET``` https://seva-backend1.herokuapp.com/admin

```
Header : 
    auth-token - token-value
```

## feedback

5. ``` GET``` https://seva-backend1.herokuapp.com/feedback


6. ```POST``` https://seva-backend1.herokuapp.com/user/feedback

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```

7. ```PUT``` https://seva-backend1.herokuapp.com/user/feedback/:Id

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```


8. ```DELETE``` https://seva-backend1.herokuapp.com/user/feedback/:Id

```
Header : 
    auth-token - token-value
```

## category

9. ``` GET``` https://seva-backend1.herokuapp.com/admin/category

```

```

10. ``` POST``` https://seva-backend1.herokuapp.com/admin/category

```
{
    "icon":"https://raw.githubusercontent.com/omjdeshmukh/seva/main/demo.png?token=AHT44ZFI435X3WB4KHO3BUTAJTNSY",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

11. ``` PUT``` https://seva-backend1.herokuapp.com/admin/category/:Id

```
{
    "icon":"https://raw.githubusercontent.com/omjdeshmukh/seva/main/demo.png?token=AHT44ZFI435X3WB4KHO3BUTAJTNSY",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

11. ``` DELETE``` https://seva-backend1.herokuapp.com/admin/category/:Id

```

```

## Service

12. ``` GET``` https://seva-backend1.herokuapp.com/service

```

```

13. ``` POST``` https://seva-backend1.herokuapp.com/provider/service

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

14. ``` PUT``` https://seva-backend1.herokuapp.com/provider/service/:Id

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

15. ``` DELETE``` https://seva-backend1.herokuapp.com/provider/service/:Id

```
Header : 
    auth-token - token-value
```

16. ``` GET``` https://seva-backend1.herokuapp.com/provider/my/service/:Id

```
Header : 
    auth-token - token-value
```

17. ``` GET``` https://seva-backend1.herokuapp.com/service/:Pincode

```
Header : 
    auth-token - token-value
```

18. ``` GET``` https://seva-backend1.herokuapp.com/seriveBycategoryAndPin/:categoryId/:Pincode

```

```


19. ``` GET``` https://seva-backend1.herokuapp.com/seriveBycategoryAndPin/:categoryId/:Pincode

```

```

20. ``` GET``` https://seva-backend1.herokuapp.com/service/:Id

```

```

21. ``` GET``` https://seva-backend1.herokuapp.com/VerifiedService

```

```

## user suggestiom(token requied)

22. ``` GET``` https://seva-backend1.herokuapp.com/user/my/suggestion/:userId

```

```

22. ``` GET``` https://seva-backend1.herokuapp.com/user/my/suggestion/:userId

```
https://seva-backend1.herokuapp.com/user/my/suggestion/604cc1fd43e82822a85786e6
user id - 604cc1fd43e82822a85786e6
```

23. ``` POST``` https://seva-backend1.herokuapp.com/user/suggestion

```
{
    "ServiceType": "chai`s shop",
    "ServicePinCode": "411046",
    "category": "604cdf8b0bc38c07e8a6fd94",
    "ServiceDescription": "Service Description"
}
```


24. ``` PUT``` https://seva-backend1.herokuapp.com/user/suggestion/:suggestionId

```

```

25. ``` DELETE``` https://seva-backend1.herokuapp.com/user/suggestion/:suggestionId

```

```


## User Profile 

26. ``` GET``` https://seva-backend1.herokuapp.com/user/profile/:profileId

```

```

27. ``` PUT``` https://seva-backend1.herokuapp.com/user/profile/:profileId

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
28. ``` DELETE``` https://seva-backend1.herokuapp.com/user/profile/:profileId

```
Header : 
    auth-token - token-value
```

```

```

## Provider Profile 

26. ``` GET``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

```

```

27. ``` PUT``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

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
28. ``` DELETE``` https://seva-backend1.herokuapp.com/provider/profile/:profileId

```
Header : 
    auth-token - token-values
```

```

```









