    
import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';

let db = null;


module.exports = app => {
  if(!db) {
    const config = app.libs.config;
    const sequelize = config;
    db = {
      sequelize,
      Sequelize,
      models: {}
    };
    
    const dir = path.join(__dirname, 'models');
    fs.readdirSync(dir).forEach(filename => {
      const modelDir = path.join(dir, filename);
      const model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });
    
    
  }

  return db;
};