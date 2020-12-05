# Tech-Talk: A Professional Network For Women In Technology
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-express-red.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-axios-yellow.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-MySQL-purple.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-react_router_dom-blue.svg)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/Hard_Dependancy-if_env-orange.svg)](https://shields.io/)

## Description 
Tech-Talk is a professional network for women in technology. This is the perfect place for ambitious women to connect and make things happen. Whether you are searching for a job opportunity, looking for a mentor to guide you through this bustling industry, or just have questions about the tech field you're in, Tech-Talk is the community to join. We want you to level up personally and professionally.
Although this site is catered towards women, all who support women in tech are welcome to join!

## Mission Statement
Our goal is for you to ask questions, exchange ideas, and connect with each other. We’re creating a space for you to share not just what you do, but who you are to build a better you! We want to provide the tools and connections that women in technology need to own their futures.

![Tech Talk](client/public/signin.gif)

## Deployed Link
* [Visit Tech Talk](https://app-tech-talk.herokuapp.com/)

### Sample login
* email: jane@gmail.com
* password: password123

## Built With
* [Cloudinary](https://cloudinary.com/) - cloud-based image management API
* [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) - method for representing claims between user and server
* [Passport](http://www.passportjs.org/) - authentication middleware for Node.js
* [Sequelize](https://sequelize.org/) - promise-based Node.js ORM for MySQL
* [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli) - Command line interface used to configure the Sequelize database
* [MySQL Workbench](https://www.mysql.com/) - provides data modeling, SQL development, and comprehensive administration tools for server configuration, user administration, backup, etc
* [Express](https://expressjs.com/) - backend web application framework for Node.js to build web applications and APIs
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [React.js](https://reactjs.org/) - a front-end JavaScript library for building user interfaces and UI components
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - a syntax extension to JavaScript used in React to describe whta a UI should look like
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - defines styling on the HTML page
* [Material UI](https://material-ui.com/) - UI framework for React
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub
* [Heroku](https://heroku.com) - cloud platform for deploying application
* [JawsDB](https://www.jawsdb.com/) - database service for deploying application

## Features
* MySQL and Sequelize create the database and store user information
  * Database with one to many, many to one, and many to many relationships
* Express defines the backend server API routes
  * GET routes to retrieve user, post, comment, and tag data
  * POST routes to add new users, posts, and comments
* React creates the application and the user interface components
    * Each page contains stateful components to keep track of user information and inputs 
    * Multiple useState hooks are utilized to access and update different states
    * UserContext provides each page with access to a validated user's information
    * React Router allows React to dynamically render page components. Users must be logged in to access the application, otherwise they are re-routed to the sign in page.
* Node.js runs JavaScript outside of the browser to allow the backend to function
* Users are authenticated using middleware in order to validate login
  * Passport, Bcrypt, Passport JWT, JSON Web Token, and Cookie Session are all utilized for authentication
* Cloudinary stores user images in cloud storage through a third party API

## Database Models
![Database Models](client/public/db_models.png)

## Code
The below code demonstrates how React Router dynamically renders pages to a user if they are authenticated and logged in, otherwise it will redirect them to the sign in page. A useState hook keeps track of if a user is signed in, validated, and in a session. A UserContext Provider gives all pages access to a users information as well as the login and logout functions.

      const [user, setUser] = useState(null);
      const [checkedUser, setCheckedUser] = useState(false);
      useEffect(() => {
        refreshUser()
      }, []);

      const refreshUser = () => {
        return API.User.getCurrent()
          .then(res => {
            setUser(() => res.data || null)
            setCheckedUser(() => true)
          })
      }
      const login = (userLoginData) => {
        return API.User.login(userLoginData)
          .then(res => setUser(() => res.data || null))
      }
      const logout = () => {
        return API.User.logout()
          .then(() => setUser(() => null))
      }
    <UserContext.Provider value={{ user, login, logout, refreshUser }}>
      <Router>
        <Switch>
          <Route exact path="/">{checkedUser && (user ? <Redirect to="/newsfeed" /> : <HomePage />)}</Route>
          <Route exact path="/signup">{checkedUser && (user ? <Redirect to="/newsfeed" /> : <SignUpPage />)}</Route>
          <Route exact path="/members">{checkedUser && (!user ? <Redirect to="/" /> : <MemberPage />)}</Route>
          <Route exact path="/newsfeed">{checkedUser && (!user ? <Redirect to="/" /> : <PostPage />)}</Route>
          <Route exact path="/profile">{checkedUser && (!user ? <Redirect to="/" /> : <ProfilePage />)}</Route>
          <Route path="*">
            {checkedUser && (user ? <Redirect to="/newsfeed" /> : <Redirect to="/" />)}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

The below code demonstrates how a useEffect hook calls a function that makes an API call to the server to get all posts and its associated comments and tags. React dynamically creates cards for each post plus its tags and comments.

    useEffect(() => {
        loadPosts()
    }, [commentSubmitStatus, postSubmitStatus]);

    function loadPosts() {
        API.Post.getPost()
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(err => console.log(err));
    }
    {posts.map(post => {
    return (
        <Card className={classes.root, classes.card} key={post.id}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                    {/* Map through all the tags associated with a post and create buttons for each */}
                    {post.PostTags.map(tag => {
                        return (
                            <BtnTags tags={tag.Tag.name} key={tag.id} />
                        )
                    })}
                </Grid>
            </Grid>
            <Grid item xs zeroMinWidth>
                {/* Pass props to the PostTitle component to render each post title */}
                <PostTitle postTitle={post.title} />
                {/* Pass props to the PostComment component to render each post body text */}
                <PostComment postBody={post.body} />
                {/* Hidden comments that display when user clicks the expand more icon */}
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {post.Comments.map(comment => {
                            return (
                                <Grid container spacing={1} key={comment.id}>
                                    {/* Map through all the comments associated with a post and create a new paper component to display */}
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper}>
                                            <Avatar
                                                // Pass props to the Avatar component to render each user's individual information
                                                photo={comment.User.photo}
                                            />
                                            {comment.text}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </CardContent>
                </Collapse >
            </Grid>
        </Card >
    )


## Authors

**Rebecca Eng** 
- [Github](https://github.com/engrebecca)
- [LinkedIn](https://www.linkedin.com/in/engrebecca/)

**Kelly Stone** 
- [Github](https://github.com/kellystone4)
- [LinkedIn](https://www.linkedin.com/in/kelly-a-stone/)

**Kelly Kim** 
- [Github](https://github.com/kellykim831)
- [LinkedIn](https://www.linkedin.com/in/realtorkellykim/)

**Christy Lee** 
- [Github](https://github.com/christyglee)
- [LinkedIn](https://www.linkedin.com/in/christy-lee/)

## Acknowledgments
* [Link to Google](https://www.google.com)
* [Link to W3 Schools](https://www.w3schools.com)
* [Link to StackOverflow](https://www.stackoverflow.com)
* [Link to Node.js](https://nodejs.org/en/)

## License
MIT License Copyright (c) [2020] [Rebecca Eng, Kelly Stone, Kelly Kim, Christy Lee] Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.