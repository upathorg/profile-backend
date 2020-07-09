import { DataTypes } from 'sequelize';
import { sequelize } from '../sequelize';


export const UserModel=sequelize.define('User',{
    id:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING(20),
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
    nationality: {
        type:DataTypes.STRING(30),
        allowNull:false
    },
    avatar: {
        type:DataTypes.STRING,
        allowNull:false
    }
})