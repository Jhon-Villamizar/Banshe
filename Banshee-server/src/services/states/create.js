import db from '../../database/models/index';

const create = async (name, countryId) => {
  return await db.states.create({      
    "name": name, 
    "countryId": countryId
  }).then(data => {
    console.log(data );
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}
