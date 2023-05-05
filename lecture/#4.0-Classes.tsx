"use strict";

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private nickName: string
  ) {}
  getFullName() {
    return `${this.firstName}${this.lastName}`;
  }

  abstract getNickName(): void; // call signature
}

class Player2 extends User {
  getNickName(): void {
    console.log(this.nickName);
  }
}

const jaewoo2 = new Player2("jaewoo", "jeong", "재우");
