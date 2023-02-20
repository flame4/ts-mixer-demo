import { Attribute, Entity } from "@typedorm/common";
import { decorate, Mixin } from "ts-mixer";

class T {
  @decorate(Attribute())
  user_id?: string;
}

class T2 {
  @decorate(Attribute())
  user_id2?: string;
}

@Entity({
  name: "user",
  primaryKey: {
    partitionKey: "USER@{{user_id}}",
    sortKey: "USER@{{user_id}}",
  },
})
export class User extends Mixin(T, T2) {}


// below code can work.
// @Entity({
//   name: "user",
//   primaryKey: {
//     partitionKey: "USER@{{user_id}}",
//     sortKey: "USER@{{user_id}}",
//   },
// })
// export class User extends Mixin(T) {}