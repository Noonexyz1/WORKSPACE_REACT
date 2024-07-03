import { UserCreatedAt } from "./UserCreatedAt";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";

export class User {
    //id: String; No es un Value Object
    id: UserId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    //Un dominio puede tener compotamiento
    public nameAndEmail() {
        return `${this.name} - ${this.email}`;
    }

}
