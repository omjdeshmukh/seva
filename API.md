# API for SEVA APP

### register

1. ``` POST``` http://localhost:5000/register
```
{
    "userName" : "bhupendra",
    "fullName" : "user bhupendra ",
    "email":"provider1@gmail.com",
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





