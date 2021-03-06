import db from '../../database/models/index';

const update = async (id, name, countryId) => {
  return await db.states.update({
    "id": id, 
    "name": name, 
    "countryId": countryId
  }, {
    where : {
      "id": id
    }
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  update
}
