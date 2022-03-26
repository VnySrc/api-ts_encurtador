import {sequelize} from "../instancies/mysql"
import {Model ,DataTypes} from "sequelize"

interface urlInstance extends Model {
    id: Number,
    urldefault: String,
    urlshort: String,
    validdate: Date,
}

export const Urls = sequelize.define<urlInstance>("Urls", {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.DATE
    },
    urldefault: {
        type: DataTypes.STRING
    },
    urlshort: {
        type: DataTypes.STRING
    },
    validdate: {
        type: DataTypes.DATE
    }   
},
    {

    tableName: "urls",
    timestamps: false,

    }     
)