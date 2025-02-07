const { Controller } = require('egg')

class HelloController extends Controller {
    async index() {
        const { ctx } = this;
        // ctx.body = "hello from another world";
        const res = await ctx.service.product.index();
        const list = ['1', '2', '3'];
        await ctx.render('index.nj', {res, list}, {
        });//渲染模版
    }
    
    async getListQuery() {
        const {ctx} = this;        
        ctx.body = [{
            name: `${ctx.query.name}`,
            age: 20,
            info: `${ctx.query.id}`
        }]
    }

    async getListParams() {
        const {ctx} = this;
        ctx.body = [{
            name: `${ctx.params.name}`,
            age: 20,
            info: `${ctx.params.id}`
        }]
    }
}

module.exports = HelloController;