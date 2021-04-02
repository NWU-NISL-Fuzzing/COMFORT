// 读取核心的映射函数
let {textToCode} = require('./textToCode');

function nodeToCode(emuNodes, ulNodes){
    let codeString = '';

    for (let i = 0; i < emuNodes.length; i++) {

        let olNode = emuNodes[i].querySelector('ol');

        // 获取其中的所有li节点，包括后代li节点（这一点一定要注意）
        let liNodes = olNode.querySelectorAll('li');

        // 核心逻辑，递归地逐句翻译；
        // 先将第一个li节点直接加入到结果中
        codeString += textToCode(liNodes[0]);
        let brace = 0;

        // 核心算法：遍历li节点，逐条转化为代码。以最大为4的滑动窗口来判断节点间的父子关系，以添加适当的 '{' 和 '}' 符号
        for (let j = 1; j < liNodes.length; j++) {

            let previousNode = liNodes[j - 1];
            let nowNode = liNodes[j];
            let behindNode = nowNode;
            if ((j + 1) < liNodes.length) {
                behindNode = liNodes[j + 1];
            }
            let statementString = textToCode(nowNode);

            if (j === (liNodes.length - 1)) {
                var right_brace = "";
                if (brace !== 0) {
                    for (var ii = 0; ii < brace; ii++) {
                        right_brace += "}\n";
                    }
                }
                codeString += statementString;
                codeString += right_brace;
                continue;
            }

            // 情况1：前后两个节点是兄弟节点，那么不添加括号
            if (nowNode.parentNode.isSameNode(previousNode.parentNode)) {
                // console.log('是兄弟');
                // codeString += statementString;
            }
            // 情况2：后一个发生了缩进
            else if (nowNode.parentNode.parentNode.isSameNode(previousNode)) {
                // console.log('发生缩进');
                codeString += '{\n';
                brace += 1;
                // codeString += statementString;
            }
            // 情况3：缩进回收
            if (nowNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                codeString += statementString;
                codeString += '}\n';
                brace -= 1;
                // codeString += statementString;
            } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                // console.log('缩进回收');
                codeString += statementString;
                codeString += '}\n}\n';
                brace -= 2;
                // codeString += statementString;
            } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                codeString += statementString;
                codeString += '}\n}\n}\n';
                brace -= 3;
                // codeString += statementString;
            } else if (nowNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.isSameNode(behindNode.parentNode)) {
                codeString += statementString;
                codeString += '}\n}\n}\n}\n';
                brace -= 4;
                // codeString += statementString;
            } else {
                codeString += statementString;
            }
        }
    }

    // 将ul节点的内容转换为代码
    for(let i = 0; i < ulNodes.length; i++){
        let liNodes = ulNodes[i].querySelectorAll('li');

        for (let j = 0; j < liNodes.length; j++){
            let statementString = textToCode(liNodes[j]);
            codeString += statementString;
        }
    }
    return codeString;
}

exports.nodeToCode = nodeToCode;