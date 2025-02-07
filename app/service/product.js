const Service = require('egg').Service;
// service服务用于链接数据库
class ProductService extends Service {
    async index() {
        return {
            id: 100,
            name: 'test'
        }
    }
}

module.exports = ProductService;