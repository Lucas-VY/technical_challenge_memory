# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Setup

### Environment Variables

This project uses environment variables to manage the environment (development or production) and the API URL. You need to define these variables in a `.env` file in the root directory of the project.

Here is an example of what your `.env` file might look like:

```bash
# .env file

# For development
REACT_APP_ENV=development
REACT_APP_API_URL=https://api.example.com
```

```bash
# For production
REACT_APP_ENV=production
REACT_APP_API_URL=https://api.example.com
```

### Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.

To ensure the app runs in development mode, make sure the environment variable is set to development in your .env file:

```bash
REACT_APP_ENV=development
```

### Then run:
```bash
npm start
```
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits. You will also see any lint errors in the console.

npm run build
Builds the app for production to the build folder.

To ensure the app builds in production mode, make sure the environment variable is set to production in your .env file:

```bash
REACT_APP_ENV=production
```

Then run:

```bash
npm run build
```
This command correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

```bash
npm run eject
```

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Deployment
To deploy the app, you need to ensure that the environment is set to production, then run the npm run build command to create an optimized production build.

```bash
npm run build
```
You can then deploy the contents of the build folder to your preferred hosting provider.

### Link Deployed Project:

```bash
challenge-memory-proj.vercel.app
```

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.





