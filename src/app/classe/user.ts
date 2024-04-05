export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  roles: string[]; // Si les rôles sont stockés sous forme de chaînes de caractères

  constructor(
    id: string,

    username: string,
    email: string,
    password: string,
    roles: string[] = []
  ) {
    this.id=id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = roles;
  }
}
