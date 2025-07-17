# **Cortex LMS Server**

This Doc Contains Api Endpoints and their uses

**Auth**: Auth API is for authorize each user. 

**Root-path** - `/api/v1`

**Example-routes** - `/api/v1/auth/register`,  `/api/v1/user/create-user`, `/api/v1/course/create-course`, `/api/v1/course/update-course/:courseId` 
 

**Paths** : 
1. **Auth**: `/auth`
    - **register-route** *(this route will let user register an account with users given email and password)* : `/register`, *method*: `post`
    - **login-route** *(this route will let user login after successfully registered an account)* : `/login`, *method*: `post`
    - **logout-route** *(this route will help to logged out an user from sites if user already has an account and already logged in)* : `/logout`, *method*: `post`

2. **User**: `/user`
    - **create-user** : `/create-user`, **method**: `post`
    - **get-users** : `/users`, **method**: `get`
    - **get-admins** : `/admins`, **method**: `get`

3. **Course**: `/course`
    - **create-course** : `/create-course`, **method**: `post`
    - **all-courses** : `/all-courses`, **method**: `get`
    - **single-course** : `/single-course`, **method**: `get`
    - **update-course** : `/update-course`, **method**: `patch`
    - **delete-course** : `/delete-course`, **method**: `delete`

4. **Modules**: `modules`


