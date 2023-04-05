const { EntityManager, EntityRepository, MikroORM, Options } = require('@mikro-orm/core');
const  mikroORMConfig  = require("../configs/mikro-orm.config.js");
const { PostgreSqlDriver } = require ('@mikro-orm/postgresql');


 const initializeORM = async () => {
    const orm = await MikroORM.init(mikroORMConfig);
    
    return orm;
};
 const DI = {
    orm: MikroORM,
    em: EntityManager,
    userRepository: "userRepository",
    server: ""
  };

  module.exports = {
    initializeORM,
    DI
  };