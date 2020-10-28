# Starter Kit for [Building Full CRUD REST API](https://github.com/salmen123/task-manager-api-NodeJS) on GitHub

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer.
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency** | **Use**                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| express        | Fast, unopinionated, minimalist web framework for node                                                          |
| mongoose       | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment                      |
| multer         | Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files    |
| sharp          | The typical use case for this high speed Node.js module is to convert large images in common formats to smaller |
| validator      | This library validates and sanitizes strings only                                                               |

### Development Dependencies

| **Dependency** | **Use**                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| env-cmd        | A simple node program for executing commands using an environment from an env file                                                                               |
| jest           | Complete and ready to set-up JavaScript testing solution                                                                                                         |
| nodemon        | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected |
| supertest      | The motivation with this module is to provide a high-level abstraction for testing HTTP                                                                          |
