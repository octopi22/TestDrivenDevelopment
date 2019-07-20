const models = require('../models');



module.exports = () => {
    return models.sequelize.sync({force: true}) //기존의 DB 존재시 날려버린다.
}