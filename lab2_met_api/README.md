### Major Studio 1 - Lab 2: Met Museum API

#### Topics
- Met API Documentation
- How to construct a request
- Endpoints
- Fetching data using javascript
- Saving and using Json files

Assignment 01:
Construct a request that searches for works in the fashion department that are from the 1950s

#### Met API Documentation
https://metmuseum.github.io/

#### How to construct a request
Base URL / Endpoint ? FirstParameter=value & SecondParameter=value



#### Endpoints

###### Objects
This is the Objects endpoint:  
https://collectionapi.metmuseum.org/public/collection/v1/objects

You can ask for department  
https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1

Or objects by ID  
https://collectionapi.metmuseum.org/public/collection/v1/objects/437133

###### Departments
https://collectionapi.metmuseum.org/public/collection/v1/departments

###### Search
https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers
