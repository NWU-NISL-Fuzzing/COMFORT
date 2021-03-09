class BlackList:
    # black_list_startswith = [
    #     ".exports = '/*",    # 9-21修改,这样挺多的
    #     'exports.isDark',    # 9-21修改,这样挺多的
    #     't.exports = {\n        double',
    #     'module.exports = {\n        id',
    #     # ,'function() { this.recipes'    # 考虑一下，不一定要删除，总共就4条很长的数据
    # ]

    black_list_cover = [
        ".exports = '/*",  # 9-21修改,这样挺多的
        'exports.isDark',  # 9-21修改,这样挺多的
        't.exports = {\n        double',
        'module.exports = {\n        id',
        '"MathJax_AMS"',
        'FONTDATA.familyName',
        '"result:image',
        'position: {\n            x:',
        'CharToFreqOrder'
    ]

    black_list_mixed = [
        'function(module, exports, __webpack_require__)',    # 且包含eval
        'function(module, exports)',    # 且包含eval
        'function(module, __webpack_exports__, __webpack_require__)',    # 且包含eval
    ]
