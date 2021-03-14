1. http://localhost:5000/register
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

2. http://localhost:5000/login
```
{
    "email":"provider1@gmail.com",
    "password": "12345678"
}
```

3. http://localhost:5000/user

```
Header : 
    auth-token - token-value
```

4. http://localhost:5000/provider

```
Header : 
    auth-token - token-value
```

5. http://localhost:5000/feedback


6. ``` GET``` http://localhost:5000/admin/category

```

```