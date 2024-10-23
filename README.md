Test task

Scope:
1) Basic API development
2) Redis cache
3) Error handling
4) Database integration Postgres & Sequelize
6) JWT authentication


> [!TIP]
> Please take a look at folder `./postman`. There you can find postman collection and postman env.
> Also there is five public endpoints  
> 1 - GET `http://localhost:3000` - health check  
> 2 - POST `http://localhost:3000/auth/sign_in` - authorization, getting auth token
> 3 - POST `http://localhost:3000/auth/sign_up` - creating new user, getting auth token
> 4 - POST `http://localhost:3000/auth/password_reset` - set new password for user, getting auth token
> 5 - POST `http://localhost:3000/items` - get list of external items
> 
> Before sending requests to `http://localhost:3000/purchase` endpoint you need to obtain jwt token.
> Send POST request to `http://localhost:3000/auth/sign_in` with "login" and "password" in the body. And if you imported postman collection and env, the obtained token will be applied automatically.
> You can get login and password at `db/seeders/20241021213925-User.js` file.
> Or you can use `http://localhost:3000/auth/sign_up` endpoint to register new user.

How to run project
-
Long story short - `docker compose up`  

Step-by-step

1. Clone project  
   `git clone https://github.com/Lo-N/nest_pg_redis.git`  
2. Create a `.env` file in the root of the project and paste the values ​​below  
3. Run project  
   `docker compose up`.  

> [!WARNING]
> I can't leave variables in the code, so let them be here 😅
> ```
> DB_HOST="localhost"
> DB_CONTAINER="db"
> DB_PORT=5432
> DB_USERNAME="postgress_username"
> DB_PASSWORD="postgress_password"
> DB_DATABASE="DB_name"
> APP_PORT=3000
> JWT_SECRET="edb71ec00672f72f2f4e8aaa8342aa271b369535a6e78ad7a4e1b9573051ab2f"
> JWT_TTL="10min"
> REDIS_CONTAINER="redis"
> REDIS_PASSWORD="password"
> REDIS_PORT="6379"
> REDIS_DATABASES=1
>```
