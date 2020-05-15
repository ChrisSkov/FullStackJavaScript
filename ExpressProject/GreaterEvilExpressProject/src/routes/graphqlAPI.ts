import express from "express";
import userFacade from "../facades/userFacadeWithDB";
import basicAuth from "../middlewares/basic-auth"
const router = express.Router();
import { ApiError } from "../errors/apiError"
import setup from "../config/setupDB"
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import GameUser from "../interfaces/GameUser";
import mongoose from "mongoose";
import { Friends } from "../data/dbConnectors"



const USE_AUTHENTICATION = true;

(async function setupDB() {
  const client = await setup()
  userFacade.setDatabase(client)
})()
const schema = buildSchema(`

  type User {
    name: String
    userName: String
    role: String
    password: String
  }

  input UserInput {
    name: String
    userName: String
    password: String
  }

input FindUser{
  userName: String
}
  
  type Query {
    users : [User]!
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
    createUser(input: UserInput): String
    deleteUser(input: FindUser!): String
  }
  

  
`
)
// The root provides a resolver function for each API endpoint
var root = {
  users: async () => {
    const users = await userFacade.getAllUsers();
    const usersDTO = users.map((user) => {
      const { name, userName, role } = user;
      return { name, userName, role }
    })
    return usersDTO;
  },

  createUser: async (inp: any) => {
    const { input } = inp;
    try {
      const newUser = {
        name: input.name,
        userName: input.userName,
        password: input.password,
        role: "user"
      }

      const status = await userFacade.addUser(newUser)
      return status;

    } catch (err) {
      throw err;
    }
  },

  deleteUser: async (userName: any) => {
    const { input } = userName;
    const status = await userFacade.deleteUser(input.userName);
    return status
  }

};

  Query: {
    getOneFriend: (root, { id }) => {
      return Friends.findById(id);

    },
    allFriends: () => {
      return Friends.find({})
    }
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.firstName,
        gender: input.gender,
        age: input.age,
        language: input.language,
        email: input.email,
        contacts: input.contacts
      })
      newFriend.id = newFriend._id;
      return newFriend.save();
    },
    updateFriend: (root, { input }) => {
      return Friends.findOneAndUpdate({ _id: input.id }, input, { new: true });
    },
    deleteFriend: async (root, { id }) => {
      try {
        await Friends.findOneAndRemove({ _id: id })
        return `Friend with id: ${id} deleted`
      } catch (err) {
        return `Failed to delete friend with id: ${id} deleted`
      }

    }//end of deletefriend

  }//end of mutation

};//end of resolvers




// if (USE_AUTHENTICATION) {
//     router.use(basicAuth)
// }

router.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

//Only if we need roles
//middleware basic auth
// router.use("/", (req: any, res, next) => {
//   if (USE_AUTHENTICATION) {
//     const role = req.role;
//     if (role != "admin") {
//       throw new ApiError("Not Authorized", 403)
//     }
//     next();
//   }
// })


module.exports = router;