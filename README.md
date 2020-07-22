# NASA-Project

There are two folders. *nasaproject* is the back-end and *nasa-project-fe* is the front-end

### Front-end

This is a Single Page React application written using TypeScript and Redux. It makes use of Material-UI for the visuals and Material-UI Grid for the layout, helping to enable this application to be fully responsive for any mobile, tablet, or computer. Axios is used to pull date in from the backend.

#### Feature-set

- Each Rover name is mapped to each card from the backend api.
- "Select" buttons on cards update to indicate which Rover is selected
- Date picker only allows you to choose from range of dates that the selected rover has been active on mars
- Images automatically update based on the date and rover selected
- Images take you to online image source when clicked for higher defininition viewing
- *All* components contain a suite of basic unit tests

#### Known Limitations and Areas for Improvement

- The initial state should update as vaild date for every rover. Because there is not a date all rovers existed on mars at the same time, the Spirit rover starts out at an invalid date if selected first, and needs to be changed by the user to view photos. Alternatively, inital state could be left empty and would have no rover selected to start as well as a dialog to indicate no rover is selected in image view
- upon having more time to work on this project, I would like to implement even deeper tests. 


### Back-end

This is a Java SpringBoot backend with 2 REST API endpoints. One returns a list of rovers, and the other returns a list of images from a specific rover at a specific date. This is a fairly basic backend as the front-end was actually the main focus of this project.

#### Known Limitations and Areas for Improvement

- The very next thing I would do for this backend is add unit tests to it. 
- A feature to serve images in a way for the user to download the images would be the next larger feature to implement. Because of the time I had available to work on this project, this was unfortunately something I couldn't get to.
