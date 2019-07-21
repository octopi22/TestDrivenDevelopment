const models = require('../models');



module.exports = () => {
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    };
    return models.sequelize.sync(options) //기존의 DB 존재시 날려버린다.
}