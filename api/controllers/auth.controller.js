import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  //db operations
  // console.log(req.body);

  const { username, email, password } = req.body;
  console.log("register endpoint");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    // create a new user and save to db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User Created Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Failed to Create User" });
  }
};

export const login = async (req, res) => {
  //db operations
  const { username, password } = req.body;

  try {
    // Check User exist
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

    // Check password validity

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials!" });

    // generate cookie token and send to the user
    //res.setHeader("Set-Cookie", "test=" + "myValue").json("success");

    const token = jwt.sign({
      id:user.id
    })

    const age = 1000 * 60 * 60 * 24 * 7;
    res
      .cookie("test2", "myValue2", {
        httpOnly: true, //Client side JS cannot access cookie
        //secure: true, // for https mode in deployment
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login Successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to Login" });
  }
};

export const logout = (req, res) => {
  //db operations
};
