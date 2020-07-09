import jwt from "jsonwebtoken";
import shortid from "shortid";
import { promisify } from "util";

import { connection, query } from "../../../db/connection";

export const Mutation = {
  createUser: async (parent, args, context, info) => {
    const uid = shortid.generate();
    const { username, email, password } = args.UserInput;
    return query(
      `insert into users values('${uid}', '${username}', '${email}', '${password}')`
    )
      .then((res) => {
        console.log(res);
        return {
          code: 200,
        };
      })
      .catch((err) => {
        console.log(err);
        return {
          code: 500,
        };
      });
  },
  loginUser: async (parent, args, context, info) => {
    // if (context.user != null) {
    console.log(args);
    const { email, password } = args;

    return query(`select * from users where email = '${email}'`)
      .then((res) => {
        if (res[0].password === password) {
          const token = jwt.sign(
            { userId: res[0].id, email: res[0].email },
            "todo",
            {
              expiresIn: "1h",
            }
          );
          return {
            code: 200,
            token,
          };
        } else {
          return {
            code: 401,
          };
        }
      })
      .catch((err) => {
        console.log(err);
        return {
          code: 500,
        };
      });
    // } else {
    //   return {
    //     code: "401",
    //   };
    // }
  },
};
