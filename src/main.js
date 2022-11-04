class CodeSourcePlugin {
  constructor(options) {
    console.log('组件初始化',options);
    this.name = '组件'
  }
  apply(compiler) {
    console.log('组件加载');
  }
}
module.exports = CodeSourcePlugin;