# HEALTHWISE

## PROJECT FEATURES
The project uses **MERN** stack to create a fully functional **medical facility system**.

The following key features of our submission summarised in a video.

## PROJECT SETUP
Before following the steps of setting up the environment for the project to run, **ensure you have the following things installed** in your local device:
- [_python_](https://www.python.org/downloads/ "Python Download Link")
- [_pytesseract_](https://github.com/tesseract-ocr/tesseract "PyTesseract Github Link")
- [_nodejs_](https://nodejs.org/en/download "Nodejs Download Link")
- [_MongoDB Atlas With Compass_](https://www.mongodb.com/products/tools)

`Note:`
1. After installing, **Make sure you add above tools into the environment variable** of your box so that the project files can access them.
2. All the further commands are assuming that you are in you favourite shell in the main project directory i.e. under teh name `HealthWise`.

To replicate the development environment, follow the given steps below:  
  
`Step 1:` To clone the repository
```
git clone https://github.com/Darshan-2021-11/HealthWise
```
`Step 2:` To install backend dependencies, we go to the project directory and
install them
```
cd HealthWise
npm install
```
`Step 3:` To install the frontend dependencies, we go into the frontend directory
in the main project directory
```
cd frontend
npm install 
```

Following the above steps will ensure you have your setup ready for basic
functionalities.

## RUNNING THE PROJECT
  
### STEP 1: Running backend database
Set up the environment file(.env) as of your liking.  
Then go to the installed mongodb atlas application, and start the database server, according to the mongodb uri set up in the environment file.

Wait until the database server is set up.

### STEP 2: Running backend server
After running the backend database, go to the main project directory in your terminal, and use the following command to start the backend server.
```
cd HealthWise
npm run dev
```
Wait until the backend is started.

### STEP 3: Running the frontend server
After going through step 2, finally we start the frontend server.
```
npm run frontend
```

After following the above steps, you could access the project using localhost.
