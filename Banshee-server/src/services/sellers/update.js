import db from '../../database/models/index';

const update = async (id, name, cc) => {
  return await db.sellers.update({
    "id": id, 
    "name": name, 
    "cc": cc
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
