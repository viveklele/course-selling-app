const express = require('express');
const app = express();
const{createCourseRoutes} = require('./routes/course')
const{createUserRoutes} = require('./routes/user')

app.use('/users', createUserRoutes)
app.use('/course', createCourseRoutes)

createUserRoutes(app);
createCourseRoutes(app);

app.listen(3000);
