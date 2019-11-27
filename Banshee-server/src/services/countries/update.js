import db from '../../database/models/index';

const update = async (id, name) => {
  return await db.countries.update({
    "id": id, 
    "name": name
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
