const { Controller } = require("egg");
const OSS = require("ali-oss");
const fs = require("fs-extra");

const client = new OSS({
  // 从环境变量中获取访问凭证。运行本代码示例之前，请确保已设置环境变量OSS_ACCESS_KEY_ID和OSS_ACCESS_KEY_SECRET。
  //   accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  //   accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  accessKeyId: "LTAI5tDN9f5jbBMe9vT7sbiB",
  accessKeySecret: "ZeDp6nRixZGtXP2f8poV4gyaTbTfqD",
  // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
  region: "cn-beijing",
  // yourBucketName填写Bucket名称。
  bucket: "egg-simple",
  endpoint: "oss-cn-beijing.aliyuncs.com", // 明确指定 Endpoint
});
// // 自定义请求头
// const headers = {
//   // 指定Object的存储类型。
//   "x-oss-storage-class": "Standard",
//   // 指定Object的访问权限。
//   "x-oss-object-acl": "private",
//   // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.txt。
//   "Content-Disposition": 'attachment; filename="example.txt"',
//   // 设置Object的标签，可同时设置多个标签。
//   "x-oss-tagging": "Tag1=1&Tag2=2",
//   // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
//   "x-oss-forbid-overwrite": "true",
// };

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
    console.log(ctx.request.body);
    console.log("got %d files", ctx.request.files.length);

    const file = ctx.request.files[0];
    console.log(file, "file=====================");

    let result;
    try {
      // https://help.aliyun.com/document_detail/111265.html
      // 处理文件，比如上传到云端
      result = await client.put(file.filename, file.filepath);
    } finally {
      // 需要删除临时文件
      await fs.unlink(file.filepath);
    }
    ctx.body = {
      url: result.url,
      // 获取所有的字段值
      requestBody: result,
    };
  }
}

module.exports = UploadController;
