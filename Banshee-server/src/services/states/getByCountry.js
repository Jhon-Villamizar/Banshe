import db from '../../database/models/index';

const getByCountry = async (countryId) => {
  return await db.states.findAll({
    where:{
      "countryId": countryId
    }
  }).then(data => {
    return data;
  }).catch(e => {
    console.log(e);
  });
}

module.exports = {
  getByCountry
}
