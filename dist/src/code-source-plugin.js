var CodeSourcePlugin = /** @class */ (function () {
    function CodeSourcePlugin(options) {
        console.log('组件初始化', options);
        this.name = '组件';
    }
    CodeSourcePlugin.prototype.apply = function (compiler) {
        console.log('组件加载');
    };
    return CodeSourcePlugin;
}());
module.exports = CodeSourcePlugin;
//# sourceMappingURL=code-source-plugin.js.map