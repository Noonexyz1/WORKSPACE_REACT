import { UserCreatedAt } from "./value-objects/UserCreatedAt";
import { UserEmail } from "./value-objects/UserEmail";
import { UserId } from "./value-objects/UserId";
import { UserName } from "./value-objects/UserName";

export class User {
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

  public nameAndEmail() {
    return `${this.name} - ${this.email}`;
  }
}
