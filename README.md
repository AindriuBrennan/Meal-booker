# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Andrew Brennan

## Overview.

This is a web application designed for the Web Applications 2 module in Waterford Institute of Technology.
The purpose of this app was to to gain an understanding of Reactjs and demonstrate a single page app. In this
app a user can signup and login in through Google Firebase Authentication, the user can then search for
restaurants by location and cuisine using the Yelp Fusion API.

. . . . . List of user features . . . .

- Login exsisting users
- Register a new user
- Search for restaurants by location and cuisine

## Setup.

You must create an account with google firebase to get the relative config data, api keys, auth domain etc4
https://firebase.google.com/

You must create a Yelp Developer account to get access to the Yelp fusion API keys to send the http get requests
for business location and cuisine.
https://www.yelp.com/fusion

You will need to install the relative dependencies.

## Data Model Design.

This apps model was simple, I had wanted to make the search view a protected route but didnt get around to doing so. As a result, each view is accesible from each other

![Alt text](/Screenshots/AppDataModel.png?raw=true "Simple diagram of the data model of the app")

Code snippets

Higher order Component for Firebase instance, this is then used in the sign up form to give
it access to the firebase instance when creating a new user. I wanted to give all my components
access to firebase if needed via the React Context.Consumer, as I would have liked to implement
sessions on the app and create a database of bookings for individual users and prevent users
with out the relevant authentication from having access to certain routes or information.

```
const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);
```

This example shows how the submit on the form is handled, on succesful sign up the user is redirected to
the search view

```
 handleSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    this.props.firebase
      .signUpNewUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...initial_state });
        this.props.history.push("/searchmeal");
      })
      .catch(error => console.log(error));
  };
```

This example shows how the yelp fusion get request was handled with help using cors-anywhere.
orginally my requests to the Yelp Fusion api were being blocked. Using the cors-anywhere was a quick
work around. for my app I am using the demo url supplied for testing this. I did not set up my own server
as a result the ammount of requests my app can make over time is limited.


`````
 searchYelpRestaurants = (location, cuisine) => {
    axios
      .get(

        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=${location}+IE&categories=${cuisine}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY_YELP}`
          }
        }
      )
      .then(res => this.setState({ searchResults: res.data.businesses }));
  };
`````

## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .



![Alt text](/Screenshots/SignUpView.png?raw=true "Sign up view")
![Alt text](/Screenshots/RestaurantSearch.png?raw=true "Search for a restaurant")

![Alt text](/Screenshots/SearchWithResults.png?raw=true "Search view with results displayed")



>> the views shown here were kept simple with out too much fluff

## Routing.

simple routing was done in this app, the app starts on a landing page from there
a user can choose to login, signup or search a meal, none of the routes are protected,
ideally the search meal option would only be available to a logged in user

- /login (public) displays a login page
- /singup (public) displays a signup page
- /search (publc) displays a search form and the results as cards when scrolling down

## Storybook.



![Alt text](/Screenshots/Storybook.png?raw=true "A look at storybook page")

## Backend (Optional).

Firebase authentication, stores a database of users


## Authentication (Optional).
Firebase Authentication was used

a test user is created under the email  >   test@mail.com
with the passsword                      >   123456

## Independent learning.

I spent time understanding how to implement the Firebase Authentication.
I also spent time learning how to implement the Yelp Fusion API, I used axios to help make the request and Postman for creating the appropriate get url.
I got a better understanding of using npm and correctly installing the appropriate dependencies.
```
