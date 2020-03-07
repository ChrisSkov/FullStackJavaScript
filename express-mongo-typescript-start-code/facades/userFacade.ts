const bcrypt = require("bcryptjs");
const debug = require("debug")("game-case");

interface IGameUser
{
  name: string,
  userName: string,
  password: string,
  role: string
}

const users: Array<IGameUser> = [];
class UserFacade
{
  static addUser(user: IGameUser): boolean
  {
    const saltAmount = 15;
    let succes = false;
    const setPW = async (user: IGameUser) =>
    {
      await bcrypt.hash(user.password, saltAmount, (err, hash) =>
      {
        if (err)
        {
          debug(`We're out of hash: ${ err }`);
        }
        else
        {
          user.password = hash;
          users.push(user);
          succes = true;
        }
      });
    };
    setPW(user);
    return succes;
  }
  static deleteUser(userName: string): boolean
  {
    const index = users.findIndex(user =>
    {
      return user.name === userName;
    });
    if (index)
    {
      users.splice(index, 1);
      return true;
    }
    else
    {
      return false;
    }
  }
  static getAllUsers(): Array<IGameUser> 
  {
    return users;
  }
  static getUser(userName: string): IGameUser { throw new Error("Not yet implemented") }
  static checkUser(userName: string, password: string): boolean
  {
    /*Use bcrypts compare method */
    throw new Error("Not yet implemented")
  }
}
