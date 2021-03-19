# API for SEVA APP

https://seva-backend1.herokuapp.com
## replace localhost with https://seva-backend1.herokuapp.com 
### register

1. ``` POST``` http://localhost:5000/register
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

### login

2. ``` POST``` http://localhost:5000/login
```
{
    "email":"provider1@gmail.com",
    "password": "12345678"
}

```

### user dashboard

3. ``` GET``` http://localhost:5000/user

```
Header : 
    auth-token - token-value
```

### provider dashboard

4. ``` GET``` http://localhost:5000/provider

```
Header : 
    auth-token - token-value
```

### feedback

5. ``` GET``` http://localhost:5000/feedback


6. ```POST``` http://localhost:5000/user/feedback

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```

7. ```PUT``` http://localhost:5000/user/feedback/:Id

```
Header : 
    auth-token - token-value
```

```
{
    "feedback":"hello"
}
```


8. ```DELETE``` http://localhost:5000/user/feedback/:Id

```
Header : 
    auth-token - token-value
```

### category

9. ``` GET``` http://localhost:5000/admin/category

```

```

10. ``` POST``` http://localhost:5000/admin/category

```
{
    "icon":"https://raw.githubusercontent.com/omjdeshmukh/seva/main/demo.png?token=AHT44ZFI435X3WB4KHO3BUTAJTNSY",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

11. ``` PUT``` http://localhost:5000/admin/category/:Id

```
{
    "icon":"https://raw.githubusercontent.com/omjdeshmukh/seva/main/demo.png?token=AHT44ZFI435X3WB4KHO3BUTAJTNSY",
    "category": "Health Care",
    "description": "Health Care Service"
}
```

11. ``` DELETE``` http://localhost:5000/admin/category/:Id

```

```

### Service

12. ``` GET``` http://localhost:5000/service

```

```

13. ``` POST``` http://localhost:5000/provider/service

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

14. ``` PUT``` http://localhost:5000/provider/service/:Id

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

15. ``` DELETE``` http://localhost:5000/provider/service/:Id

```
Header : 
    auth-token - token-value
```

16. ``` GET``` http://localhost:5000/provider/my/service/:Id

```
Header : 
    auth-token - token-value
```

17. ``` GET``` http://localhost:5000/service/:Pincode

```
Header : 
    auth-token - token-value
```

18. ``` GET``` http://localhost:5000/seriveBycategoryAndPin/:categoryId/:Pincode

```

```


19. ``` GET``` http://localhost:5000/seriveBycategoryAndPin/:categoryId/:Pincode

```

```

20. ``` GET``` http://localhost:5000/service/:Id

```

```

21. ``` GET``` http://localhost:5000/VerifiedService

```

```

## user suggestiom(token requied)

22. ``` GET``` http://localhost:5000/user/my/suggestion/:userId

```

```

22. ``` GET``` http://localhost:5000/user/my/suggestion/:userId

```
https://seva-backend1.herokuapp.com/user/my/suggestion/604cc1fd43e82822a85786e6
user id - 604cc1fd43e82822a85786e6
```

23. ``` POST``` http://localhost:5000/user/suggestion

```
{
    "ServiceType": "chai`s shop",
    "ServicePinCode": "411046",
    "category": "604cdf8b0bc38c07e8a6fd94",
    "ServiceDescription": "Service Description"
}
```


24. ``` PUT``` http://localhost:5000/user/suggestion/:suggestionId

```

```

25. ``` DELETE``` http://localhost:5000/user/suggestion/:suggestionId

```

```


## user profile 

26. ``` GET``` http://localhost:5000/user/profile/:profileId

```

```

27. ``` PUT``` http://localhost:5000/user/profile/:profileId

```

```
28. ``` DELETE``` http://localhost:5000/user/profile/:profileId

```

```









