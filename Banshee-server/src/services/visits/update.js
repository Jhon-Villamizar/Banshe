import db from '../../database/models/index';

const update = async (id, date, sellerId, net, visitTotal, description, clientId) => {
  return await db.visits.update({
    "id": id, 
    "date": date, 
    "sellerId": sellerId, 
    "net": net, 
    "visitTotal": visitTotal, 
    "description": description, 
    "clientId": clientId
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
