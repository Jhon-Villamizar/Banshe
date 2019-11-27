import db from '../../database/models/index';

const create = async (name,cc) => {
  return await db.sellers.create({
        "name": name,
        "cc": cc
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  create
}
