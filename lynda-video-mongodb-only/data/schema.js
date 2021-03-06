import {buildSchema} from "graphql";
import {resolvers} from "./resolvers"
import {makeExecutableSchema} from "graphql-tools"

const typeDefs = `

  type Friend {
    id: ID
    firstName: String
    lastName: String
    language: String
    gender : Gender
    age: Int
    email: String
    contacts: [Contact]
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getOneFriend(id: ID!): Friend
    allFriends: [Friend]!
  }

  input FriendInput {
    id: ID
    firstName: String!
    lastName: String
    language: String
    gender : Gender
    age: Int
    email: String
    contacts: [ContactInput]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id:ID!):String
  }
`
const schema = makeExecutableSchema({typeDefs,resolvers})
export {schema}