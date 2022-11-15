
import {buildSchema} from 'graphql';

const schema = buildSchema(`
    input ListInput{
        firstName: String!
        lastName: String!
        age: Int!
        language: String!
        email: String!
    }
    type List{
        id: ID
        firstName: String
        lastName: String
        age: Int
        language: String
        email: String
    }
    type Query {
        getList(email: String): List
    }

    input UserInput{
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    type User{
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }
    type Mutation{
        createUser(input: UserInput): User
        createListRecord(input: ListInput): List
    }
`);

export default schema;