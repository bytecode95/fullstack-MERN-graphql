const express = require('express');
const dotenv = require('dotenv');
const { createHandler } = require('graphql-http/lib/use/express') ;
const schema = require('../Server/schema/schema');


// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 5000;
const nodeEnv = process.env.NODE_ENV || 'development';


// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema }));



app.listen(port, console.log(`Server running on port ${port} in ${nodeEnv} mode `));