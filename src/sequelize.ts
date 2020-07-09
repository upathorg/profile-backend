import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todo_graphql", "root", "root", {
  host:'sql2.freesqldatabase.com',
  dialect:'mysql',
});


sequelize.sync({ force:true })
.then(()=>
{
    console.log("Database and table created");
})