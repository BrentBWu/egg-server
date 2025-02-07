const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    console.log('home controller', this);
    
    const { ctx } = this;
    console.log('ctx', ctx);
    
    ctx.body = 'hi, egg how are you';
  }
}

module.exports = HomeController;
