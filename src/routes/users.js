
module.exports = app =>{
    const controller = require('../Controllers/UsersController');
    
    app.route('/Users')
    .post((req, res,next) => { controller.GetAllUsers(req,res)});
    app.route('/UsersByDoc')
    .post((req, res,next) => { controller.GetUserByDoc(req,res)});
};