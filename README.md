# Tour Management System



## Features

- Initial request: `https://tms-tour-management-system.herokuapp.com/`
- Insert new tour: `https://tms-tour-management-system.herokuapp.com/tours/`

```bash
{
    "image": "https://robohash.org/temporaquianam.png?size=500x500&set=set1",
    "name": "The Road Less Traveled Tours",
    "description": "I was starting to worry that my pet turtle could tell what I was thinking.",
    "ratings": 2,
    "price": 819.26,
    "status": "out-of-stock",
    "duration": "4 days & 5 nights",
    "transport": "By Aerial Tramways"
}
```

- Display tours without queries: `https://tms-tour-management-system.herokuapp.com/tours`
- Display tours with queries: `https://tms-tour-management-system.herokuapp.com/tours?fields=name,price,ratings,-_id&sort=-price&page=3&limit=5`
- Display specific tour: `https://tms-tour-management-system.herokuapp.com/tour/632a9d7d34070a01a882c04e`
- Reform specific tour: `https://tms-tour-management-system.herokuapp.com/tour/632a9d7d34070a01a882c047`

```bash
{
    "image": "https://robohash.org/laudantiumatsint.png?size=500x500&set=set1",
    "name": "Sunrise and Sunset Trips",
    "description": "A quiet house is nice until you are ordered to stay in it for months.",
    "ratings": 5,
    "price": 409.05,
    "status": "out-of-stock",
    "duration": "4 days & 5 nights",
    "transport": "By Air"
}
```

- Display trending tours: `https://tms-tour-management-system.herokuapp.com/tour/trending`
- Display cheapest tours: `https://tms-tour-management-system.herokuapp.com/tour/cheapest`


> An assignment for ACC to implement as real time segment.

## Technologies

- Node.JS
- Express.JS
  - Cors
  - Nodemon
  - Windows Node Environment
- MongoDB
- Mongoose