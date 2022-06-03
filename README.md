# Challenge: FAVS API With JS
Hello! Welcome to my FAVS API solution.
> Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

If you want too see more deatails and examples, visit  [Favs Documentation](https://documenter.getpostman.com/view/19861904/Uz5Gmv46#intro/)。
##Instructions to run this project locally
1. Clone this repo
2. Run `npm install` on your console
3. Change the variables `PORT, MONGO_URI`  located on `index.js`.

## Collections instrucctions
### User
- #### POST Register `api/signup`
	- #### Example body (JSON)
	```
	{
		"email":"user2@gmail.com",
		"password":"user2"
	}```
- #### POST Login `api/auth/local/login`
	- #### Example body (JSON)
	```
	{
		"email":"user2@gmail.com",
		"password":"user2"
	}```

### Favs
- #### POST Create new list of favs  `api/favs` 
- #### GET Get all lists of favs `api/favs`
- #### GET Get a list of fav by its id `api/favs/{_id}`
- #### POST Add a fav in a list of fav `api/favs/addfavs/{_id}`
	- #### Example body (JSON)
	```
	{
	"tittle":"HTTP Methods",
	"description":"Learn about HTTP",
	"link":"an url here"
}```
- #### DELETE Delete a list of fav by its id `api/favs/{_id}`
