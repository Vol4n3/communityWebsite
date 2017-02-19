const Entity = require("./Entity");
const mongoose = require('mongoose');
class User extends Entity {
    constructor() {
        super();
        this._id = {
            value: ""
        }
        this.email = {
            type: String,
            unique: true,
            required: true,
            trim: true,
            value: ""
        }
        this.pseudo = {
            type: String,
            unique: true,
            required: true,
            trim: true,
            value: ""
        }
        // this.phone_number = {
        //     type: String,
        //     unique: true,
        //     sparse: true,
        //     value: ""
        // }
        this.password = {
            type: String,
            required: true,
            value: ""
        }
        this.level_permission = {
            type: String,
            default: "USER",
            value: ""
        }
        this.created_at = {
            type: Date,
            default: Date.now,
            value: ""
        }
        this.last_connection = {
            type: Date,
            default: Date.now,
            value: ""
        }
        this.last_update = {
            type: Date,
            default: Date.now,
            value: ""
        }
        this.number_of_connection = {
            type: Number,
            default: 0,
            value: ""
        }
        this.last_ip = {
            type: String,
            value: ""
        }
        // this.profile = {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'profile',
        //     value: ""
        // }
        this.credit = {
            type: Number,
            value: ""
        }
    }
    setValues(values, levelPermission) {
        if (values) {
            switch (levelPermission) {
                case "ADMIN":
                    this.deserialize(values);
                    break;
                default:
                    this.pseudo.value = values.pseudo;
                    this.password.value = values.password;
                    this.email.value = values.email;
                    break;
            }
        }
    }
    updateValues(values, levelPermission) {
        if (values) {
            switch (levelPermission) {
                case "USER":

                    break;
                case "OWNER":
                    this.pseudo.value = values.pseudo;
                    this.password.value = values.password;
                    break;
                case "ADMIN":

                    break;
                default:
                
                    break;
            }
        }
    }
}
module.exports = User;