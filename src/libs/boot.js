module.exports = app => {
var https = require('https');


      app.db.sequelize.sync().done(()=>{ //crea tablas en cada peticion con metodos de sequelize por orden de ejecucuion
        app.listen(app.get('port'), () => {
          console.log('Server on port', app.get('port'));
        });
      });
      

  
  };