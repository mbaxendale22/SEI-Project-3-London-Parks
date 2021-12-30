# London Parks - A Full Stack MERN Web App 

### Deployed on Heroku [here](https://london-parks.herokuapp.com/)

## Project Team 

* [Matthew Baxendale](https://github.com/mbaxendale22)
* [Piotr Jankowski](https://github.com/janek2204)
* [Mariana Lozynska](https://github.com/mlozynska)


## Overview
London parks was a group project developed in fulfilment of General Assembly's Software Engineering Immersive Bootcamp. The brief was to create a full stack web application using the MERN stack. The time frame for the project was nine days. The London Parks App allows users to search for parks in London. Each park has a range of information including a weather forecast, suggested activities, a map showing the park's location, and an option to receive real-time travel information to the park. If users choose the register on the site, they gain access to leaving reviews and ratings for the parks, as well as adding parks to their list of favourite parks. While this Readme will offer an overview of the project as a whole, I will primarily be focused on outlining my specific contribution to the project by centering on features I was assigned.  


## Tech Stack 

* MongoDB 
* Express
* React.js
* Node.js
* Mongoose
* BCrypt
* Axios
* React Semantic UI 
* React Mapbox GL
* Cloudinary
* AccuWeather API
* Framer Motion 
* React Toastify



## App Snapshot 
On the landing page users can chose a region by which to filter parks, see all the parks, or login/register to access the social features of the app
![Landing Page](./readme_assets/landing_parks.png)

If a region is chosen, the region page is shown with a card containing key info about a particular park, including an average rating for the park

![region page](./readme_assets/region_parks.png)

the main park show page contains a picture carousel as well as information about the park

![park index information](./readme_assets/park_index_info.png)

comments & a rating can be left for each park by registered users; users can delete their own comments & ratings

![park index comments](./readme_assets/park_index_comments.png)


## Planning

JamBoard was used to design basic wireframes of the main pages:

Landing Page 

![Landing Page Wire Frame](./readme_assets/wf_parks_landing.png)

Region page

![Dashboard Wire Frame](./readme_assets/wf_parks_region.png)

Park show page

![Expenses Wire Frame](./readme_assets/wf_park_show.png)


## Development process 

The team worked collaboratively on initial planning and building out a RESTful API, with full CRUD functionality. Similarly, the basic layout of each page on the client side was worked on as a team. After the core functionality for the project was in place, features were assigned to team members to take the lead on. These features were built out fully on both the server and client sides of the application. When problems arose the team would either pair code to find solutions or meet altogether to discuss. The features for which I was lead are as follows: 

* User's can add a park to their 'favourites'
* User's can add comments and ratings to each park; they can delete their own ratings and comments
* User ratings are accumulated and an average rating is displayed for each park on the 'Region Page'
* User's can provide their postcode and be given real time travel information on how to get to a park



## Featured Code Snippet

The following code snippet is taken from the Favourites component, these functions collectively handle allowing a user to favourite a park and updating the UI accordingly


```javascript
// requirements: ui - toggle making a park a 'favourite', display the park as a favourite if previously marked by the user as such 
// requirements: functionality - check if the park is already a user favourite on db; send http requests to add or remove the park from user's favourites in db 

const Favourite = ({ park, id }) => {

  const [ toggle, setToggle ] = useState(null)
  const [ clicked, setClicked ] = useState(false)
  const [ favourite, setFavourite ] = useState(null)
  const [ favData, setFavData ] = useState(null)
  const [ userData, setUserData ] = useState(null)

  //event handlers to toggle between an outline and full heart favourite icon
// also set state to be sent when the click event (handleclick) is triggered 
const handleMouseEnter = () => {
  const newFavData = { ...favData, targetPark: id }
  setFavData(newFavData)
  setToggle(true)
}
const handleMouseExit = () => {
  console.log(clicked)
  clicked ? setToggle(true) : setToggle(false)
}

//make the request to add or remove this park from the user's favourite parks key in the db
const handleClick = async () => {
  try {
    setToggle(true)
    setClicked(!clicked)
    if (!clicked) {
      await axios.post('/api/favourite-parks', favData, 
      {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
    } else {
      await axios.delete('/api/favourite-parks', 
      {
        data: { favData },
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
    }
} catch {
console.log('error')
} 
}

//get the userData of the current user, will be used to check if this park is in their 
// favourite parks key in the useEffect directly below
useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get('/api/profile', 
    {
      headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
    }
    )
    setUserData(data)
  }
  getData()
}, [])

// check if this park is already in the users FavouriteParks key, check to see if the 
// userData request has returned before running main function.
useEffect(()=> {
  const checkFavourite = () => {
    if (userData === null ) {
      return console.log('use effect running on initial render')
    }
    else {
      const checkPark = userData.favouriteParks.filter(x => x._id === park._id)
      checkPark.length ? setFavourite(true): console.log('not a fav park')
    }  
  }
  checkFavourite()
}, [userData, park._id])

//onclick handler to remove favourite set by useEffect directly above && send
// a delete request to the db for the current user

const removeFav = async () => {
  setFavourite(false)
  try {
    await axios.delete('/api/favourite-parks', 
      {
        data: { targetPark: id },
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` }
      }
      )
  } catch (err) {
  console.log(err)
}
}


```

## Known Bugs

* Mapbox is not currently working post-deployment
* The notification confirming sign out sometimes displays 'see you soon undefined' rather than the user's username username. 

## Development Challenges & Wins
 
The aspect of this project I enjoyed this most was working collaboratively on a longer-form project within a team. We met twice a day, in the morning for a stand up, and in late afternoon to review the day's work and plan for tomorrow. Discussing and working through problems collaboratively - either through pair coding or as a group - was a thoroughly enjoyable part experience.

Development challenges specific to my role in the team included:

* To add a park to a user's 'favourites', my aim for was to mirror the sort of experience users are familiar with from social media sites such as twitter by clicking on an empty heart icon and having it replaced with a filled heart icon. As such, syncing up the UI changes, with state changes and async HTTP requests was definitely a challenge. 

* Initially I had planned to use Transport for London's Unified API to get real time travel data. However, with the project nearing a close I did not have enough time to explore the API fully. Instead I had the user's input build a query string that sent them directly to Transport for London's journey planner with the correct parameters already filled in. Although it would be ideal to have the information returned in the application itself, this was a solution that was stable and could be implemented in the time I had left.   


## Future Development

A priority for development is to fix remaining bugs. Future goals discussed by the group center on the social aspects of the app and include: 

* Nested comments (commenting on comments)     
* A fully featured user profile page and the ability to view other user's profile page      
* User's can submit information about current parks (perhaps seasonal changes to opening times or currently unavailable amenities or areas, for example) or even a new park, subject to admin approval.      


