import { MongoConnector, MongoEntity } from ('apollo-connector-mongodb');
import lruCache from 'lru-cache';
 
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/greenhouse";
 
const conn = new MongoConnector(mongoURL, () => {
  
  // create your entities (collections)
  const users = new MongoEntity(conn, 'users', { cacheMap: lruCache });
  const context = {
    users
  };
 
  //init express and apollo
  const config = {
    schema,
    context
  };

  // launches a new express instance
  startExpress(config);
});

module.exports.createStore = () => {
    const Op = SQL.Op;
    const operatorsAliases = {
      $in: Op.in,
    };
  
    const db = new SQL('database', 'username', 'password', {
      dialect: 'sqlite',
      storage: './store.sqlite',
      operatorsAliases,
      logging: false,
    });
  
    const users = db.define('user', {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: SQL.DATE,
      updatedAt: SQL.DATE,
      email: SQL.STRING,
      token: SQL.STRING,
    });
  
    const trips = db.define('trip', {
      id: {
        type: SQL.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: SQL.DATE,
      updatedAt: SQL.DATE,
      launchId: SQL.INTEGER,
      userId: SQL.INTEGER,
    });
  
    return { users, trips };
  };