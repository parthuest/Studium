const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
// const schema = require("./schema/schema");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
require("./secure_config/db");

//use cors to allow cross origin resource sharing
// app.use(cors({ origin: "*", credentials: true }));
// app.use(cors({ origin: "http://52.53.221.35:3000", credentials: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// app.use(express.static("./public"));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

//Allow Access Control
app.use(function(req, res, next) {
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Origin", "http://52.53.221.35:3000");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Cache-Control", "no-cache");
    next();
});

// bind express with graphql
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));
app.use(
    "/graphql",
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true
    })
);
// include all routes
// app.use(require("./routes/Users"));
// app.use(passport.authenticate('jwt', {session: false}), userRoutes);

// error handling middleware
// app.use(function(err, req, res, next) {
//     console.log(err);
//     let resData = {
//         status: 422,
//         msg: err,
//         data: null
//     };
//     res.status(422).send(resData);
// });

module.exports = app;

//start your server on port 5000
app.listen(5000);
console.log("Server Listening on port 5000");