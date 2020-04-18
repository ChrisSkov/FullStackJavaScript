import path from "path";
require('dotenv').config({ path: path.join(process.cwd(), '.env') })
import { expect } from "chai";
import { Server } from "http";
import fetch from "node-fetch";
import mongo, { MongoClient } from "mongodb";
import { bryptAsync } from "../src/utils/bcrypt-async-helper"
import setup from "../src/config/setupDB"


let server: Server;
const TEST_PORT = "7777"
let client: MongoClient;

describe("Create/Update Comments", () =>
{
  let URL: string;
  before(async () =>
  {
    process.env["PORT"] = TEST_PORT;
    process.env["DB_NAME"] = "semester_case_test"

    server = await require("../src/app").server;
    URL = `http://localhost:${process.env.PORT}`;

    client = await setup();
  })

  beforeEach(async () =>
  {
    //Observe, no use of facade, but operates directly on connection
    const db = client.db(process.env.DB_NAME)
    const usersCollection = db.collection("users")
    await usersCollection.deleteMany({})
    const secretHashed = await bryptAsync("secret");
    const status = await usersCollection.insertMany([
      { name: "Peter Pan", userName: "pp@b.dk", password: secretHashed, role: "user" },
      { name: "Donald Duck", userName: "dd@b.dk", password: secretHashed, role: "user" },
      { name: "admin", userName: "admin@a.dk", password: secretHashed, role: "admin" }
    ])
  })

  after(async () =>
  {
    server.close();
    await client.close();
  })

  it("Should get the message Hello", async () =>
  {
    const result = await fetch(`${URL}/api/dummy`).then(r => r.json());
    expect(result.msg).to.be.equal("Hello")
  })

  xit("Should get three users", async () =>
  {

  })
  it("Should Add the user Jan", async () =>
  {
    const newUser = { name: "Jan Olsen", userName: "jo@b.dk", password: "secret", role: "user" }
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }
    const result = await fetch(`${URL}/api/users`, config).then(r => r.json());
    expect(result.status).to.be.equal("User was added")
  })

  it("Should find the user Donald Duck", async () =>
  {
    const userName = "dd@b.dk";
    const name = "Donald Duck";
    const expected = { name, userName };
    const config =
    {
      method: "GET",
      headers:
      {
        Accept: "application/json", "Content-Type": "application/json"
      }
    };
    const result = await fetch(`${URL}/api/users/${userName}`, config).then(r => r.json());
    expect(result).to.deep.equal(expected);
  })

  it("Should not find the user xxx@b.dk", async () =>
  {
    const expected = { code: 400, message: "User not found" };
    const userName = "xxx@b.dk";
    const config =
    {
      method: "GET",
      headers:
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    const result = await fetch(`${URL}/api/users/${userName}`, config).then(r =>
      r.json());
    expect(result).to.be.deep.equal(expected);
  });


  it("Should Remove the user Donald Duck", async () =>
  {
    const expected = { status: "User was deleted" };
    let userName = "dd@b.dk";
    let config = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    let result = await fetch(`${URL}/api/users/${userName}`, config).then(r =>
      r.json()
    );
    expect(result).to.be.deep.equal(expected);

    const expectedNotFound = { code: 400, message: "User not found" };
    config =
    {
      method: "GET",
      headers:
      {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    result = await fetch(`${URL}/api/users/${userName}`, config).then(r =>
      r.json());
    expect(result).to.be.deep.equal(expectedNotFound);
  });


})
