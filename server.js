const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./graphql/schema');

app = express();
app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );

app.listen(3000, console.log('port is running'))