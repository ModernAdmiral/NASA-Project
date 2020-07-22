# Back-end
This is a Java SpringBoot backend with 2 REST API endpoints. One returns a list of rovers, and the other returns a list of images from a specific rover at a specific date. This is a fairly basic backend as the front-end was actually the main focus of this project.

Known Limitations and Areas for Improvement
The very next thing I would do for this backend is add unit tests to it.
A feature to serve images in a way for the user to download the images would be the next larger feature to implement. Because of the time I had available to work on this project, this was unfortunately something I couldn't get to.

## Endpoints

### Routes

Root Route: `localhost:8080`

| Method | Endpoint                                           | Description                                                         |
| ------ | ------------------------------------------------   | --------------------------------------------------------------------|
| GET    | `/api/v1/rovers`                                   | Returns a list of all rovers.                                       |
| GET    | `/api/v1/rovers/{rover}/photos?earth_date={date}`  | Returns all photo information for specified rover on specified date.|


### Data Models

#### Rovers

```
{
  rovers: [
    name: string;
    id: number;
  ]
}
```

#### Photos
```
{
photos: [
  id: string;
  sol: string;
  camera: {
    id: string;
    name: string;
    full_name: string;
  };
  earth_date: string;
  img_src: string;
  ]
}
```

## Installing

- Download or clone this repository
- Navigate to local directory

