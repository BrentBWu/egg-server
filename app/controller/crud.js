const { Controller } = require('egg');

class CrudController extends Controller{
    async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.product.index();// 接收service返回的结果
    }
    async searchList() {
        const { ctx } = this;
        console.log(" ctx.request.body==============",  ctx.request.body);
        
        ctx.body = [{
            info: ctx.request.body, // request body取router传过来的request里的值
        }]
    }
}

module.exports = CrudController;