"use strict";
const { EntitySchema } = require("@mikro-orm/core");
const { BaseEntity } = require("./BaseEntity");

class User extends BaseEntity {
  constructor(full_name, user_id, password) {
    super();
    this.full_name = full_name;
    this.user_id = user_id;
    this.password = password;
  }
}
const schema = new EntitySchema({
  class: User,
  tableName: 'app_users',
  extends: "BaseEntity",
  properties: {
    full_name: { type: "string" },
    user_id: { type: "string" },
    password: { type: "string" },
  },
});
module.exports = {
  User,
  entity: User,
  schema,
  label: "userRepository",
};