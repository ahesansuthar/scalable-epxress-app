# scalable-express-app structure

This is base application structure for any node.js(express) application project

- Base controller to send common responses like success and error responses
- **Authentication:** It has JWT authentication middlewares
- **Database:** It has postgress database connectivity with orm like micro orm sequalize
- **Skeleton:** It has bin folder to start application 
- **Container:** App is dockerize and run from docker as well.
- **Dependancy injection:** Dependancy injection for all controllers for service classes