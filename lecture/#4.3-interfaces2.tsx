// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

// class Player extends User {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string) {
//     return `hello ${name}. My name is ${this.fullName()}`;
//   }
// }
// new User ()

/** ----------------------------------------------------------------------------
 *  위코드를 interface로 바꿧을떄 ?
 *
 */
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `hello ${name}. My name is ${this.fullName()}`;
  }
}

function makeUser(user: User): User {
  return {
    firstName: "jaewoo",
    lastName: "jeong",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };
}

makeUser({
  firstName: "jaewoo",
  lastName: "jeong",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
