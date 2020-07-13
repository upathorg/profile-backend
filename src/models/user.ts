import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';


export const UserModel=sequelize.define('User',{
    id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    firstname:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(10),
        allowNull:false,
    },
    avatar: {
        type:DataTypes.STRING,
        allowNull:false
    }
})