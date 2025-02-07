/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/hello', controller.hello.index);
    /**
  * getListQuery?id=hi&name=3
  * 返回 [{"name":"3","age":20,"info":"hi"}
  **/
  router.get('/getListQuery', controller.hello.getListQuery);
  /**
  * getListParams?id=hi&name=3/name=4
  * 返回 [{"name":"name=4","age":20,"info":"id=hi&name=3"}]
  **/
  router.get('/getListParams/:id/:name', controller.hello.getListParams);

  router.get('/searchList', controller.crud.index);
  router.post('/searchList', controller.crud.searchList);
  /* 
  csrf拦截 --> 需要关闭拦截才能使用post,需要在config/config.default.js中配置
  config.security = {
    csrf: {
      enable: false,
    }
  }
  */
};
