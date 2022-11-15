import express from 'express';
import resolvers from './GraphQL/resolvers.js';
import schema from './GraphQL/schema.js';
import cors from "cors";

import {graphqlHTTP} from 'express-graphql';

const app = express();
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Running ");
});

const root=resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000,()=>console.log("Server Listening on Port 3000"));