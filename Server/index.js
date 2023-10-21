const express = require('express');
require('dotenv').config();
const { createHandler } = require('graphql-http/lib/use/express') ;
const schema = require('../Server/schema/schema');


const port = process.env.PORT || 5000;


// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema }));



app.listen(port, console.log(`Server running on port ${port} `));