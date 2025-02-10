const { Controller } = require("egg");
const OSS = require("ali-oss");
const fs = require("fs-extra");
require('dotenv').config();


const client = new OSS({
  // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
    accessKeyId: process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
//   accessKeyId: "LTAI5tDN9f5jbBMe9vT7sbiB",
//   accessKeySecret: "ZeDp6nRixZGtXP2f8poV4gyaTbTfqD",
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: "cn-beijing",
  // yourBucketName填写Bucket名称。
  bucket: "egg-simple",
  endpoint: "oss-cn-beijing.aliyuncs.com", // 明确指定 Endpoint
});

class UploadController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = "hello from another world";
  }

  async uploadPage() {
    const { ctx } = this;
    await ctx.render("upload.nj");
  }
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    let result;
    try {
      result = await client.put(file.filename, file.filepath);
    } finally {
      // 需要删除临时文件
      await fs.unlink(file.filepath);
    }
    ctx.body = {
      url: result.url,
      requestBody: result,
    };
  }
}

module.exports = UploadController;
