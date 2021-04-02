// 加载工具类
let {mapRegexToString, choosePattern, normalize, getText, splitStatement} = require('./utils');
let {ForEachBreakError} = require('./error');
let {specialStatementMap} = require('../regexPattern/specialStatement');
let {bracketsMap, intrinsic, listMap, sentenceMap} = require('../regexPattern/specialSymbol');
let esprima = require('esprima');
let {logger} = require('../log/log_configuration');

function textToCode(input) {
    // 重载方法：input既可以是一个node，也可以直接是一段文本
    // 1.先解析出该节点本身的文本描述
    let text;
    let specialSymbol = [bracketsMap, intrinsic, listMap, sentenceMap];
    if (typeof input === 'string') {
        text = input;
    } else {
        text = getText(input);
    }
    let statementString = '';

    // 功能：去除代码中的特殊字符，如%,!,?等
    for (let index= 0; index < specialSymbol.length; index++){
        try {
            specialSymbol[index].forEach(function(value, key) {
                result = text.replace(key, value);
                if (text !== result){
                    text = result;
                }
            });
        } catch (e) {  // 跳出forEach
            if (e.name !== 'ForEachBreakError'){
                console.error(`${e.name}: ${e.message}`)
            }
        }
    }

    // 新增：先直接与特殊的文本进行匹配
    try {
        specialStatementMap.forEach(function(value, key) {
            let result = key.exec(text);
            if (result != null) {
                statementString += mapRegexToString(result, value);
                throw new ForEachBreakError();
            }
        });
    } catch (e) {  // 跳出forEach
        if (e.name === 'ForEachBreakError') {
            return statementString;
        }
        else {
            console.error(`${e.name}: ${e.message}`)
        }
    }

    // 2.判断文本类型，以及合适的pattern
    let [textType, regexPatternMap] = choosePattern(text);

    // 3.对于以下几种简单类型，直接以该类型对应的pattern直接匹配
    // TODO:假如这里没匹配到，最好提示一下，方便后面检查
    if (textType === 'let' || textType === 'increase' || textType === 'decrease' ||
        textType === 'perform' || textType === 'return' || textType === 'repeat' ||
        textType === 'remove' || textType === 'set' || textType === 'throw' ||
        textType === 'append' || textType === 'assert'
    ) {
        
        try {
            regexPatternMap.forEach(function(value, key) {
                let result = key.exec(text);
                if (result != null) {
                    statementString += mapRegexToString(result, value);
                    throw new ForEachBreakError();
                }
            });

            // 假如没匹配到内容，则返回 {}
            statementString += '{}';

        } catch (e) {  // 跳出forEach
            if (e.name === 'ForEachBreakError') {}
            else {
                console.error(`${e.name}: ${e.message}`)
            }
        }
    }

   // 4. 对于if语句做特殊处理：
    else if (textType === 'if') {
        let clauseSet = splitStatement(text);
        let firstStatement = clauseSet[0];
        // 对于第一句，用第一句的规则来匹配
        try {
            regexPatternMap.forEach(function(value, key) {
                let result = key.exec(firstStatement);
                if (result != null) {
                    statementString += mapRegexToString(result, value);
                    throw new ForEachBreakError();
                }
            });
            // 假如没有合适的模式，那么直接占位
            statementString += 'if (temp_identifier) {}';

        } catch (e) {
            if (e.name === 'ForEachBreakError') {}
            else {
                console.error(`${e.name}: ${e.message}`)
            }
        }
        // 对于后面的句子：
        if (clauseSet.length > 1) {
            for(let i = 1; i < clauseSet.length; i++) {

                // 假如是then，则直接返回
                if (clauseSet[i] === 'then') {
                    statementString += '';
                }
                else {
                    statementString += textToCode(clauseSet[i]);
                }
            }
        }
    }

    // 5. 对于 else 语句做特殊处理：
    else if (textType === 'else') {
        let clauseSet = splitStatement(text);
        let firstStatement = clauseSet[0];
        // 对于第一句，用第一句的规则来匹配
        try {
            regexPatternMap.forEach(function(value, key) {
                let result = key.exec(firstStatement);
                if (result != null) {
                    statementString += mapRegexToString(result, value);
                    throw new ForEachBreakError();
                }
            });
        } catch (e) {
            if (e.name === 'ForEachBreakError') {}
            else {
                console.error(`${e.name}: ${e.message}`)
            }
        }
        // 对于后面的句子：
        if (clauseSet.length > 1) {
            for(let i = 1; i < clauseSet.length; i++) {

                // 假如是then，则直接返回
                if (clauseSet[i] === 'then') {
                    statementString += '';
                }
                else {
                    statementString += textToCode(clauseSet[i]);
                }
            }
        }
    }

    // 对转换后的代码，做一遍标准化操作
    statementString = normalize(statementString);

    // 进行一次语法检查，只返回语法正确的
    // Todo:由于某些单独的句子即使是对的也无法转化为语法树，比如 if(...) ,所以需要对特殊情况额外处理
    if (statementString.startsWith('if')) {
        // 提取出if语句内的内容进行判断
        regex = new RegExp(`if \\((.*)\\)`, 'ig');
        let result = regex.exec(statementString)[1].trim();
        // result = result.replace("return", "ret");
        // result = result.replace("throw","tho");

        try {
            esprima.parseScript(result);
        }catch (e) {
            logger.info(`因语法错误而丢掉语句: ${statementString.trim()}`);
            return 'if (temp_identifier) {}';  // 返回起一个占位作用的if语句，使得后续可能存在的else语句满足语法
        }
    }
    else if (statementString.startsWith('else')) {
        regex1 = new RegExp(`else \\{([\\s\\S]*?)\\}`);
        regex2 = new RegExp(`else if \\(([\\s\\S]*?)\\)`);
        let result = "";
        if (regex1.exec(statementString) !== null){
            result = regex1.exec(statementString)[1].trim();
            result = result.replace("return", "").trim();
        }
        else if(regex2.exec(statementString) !== null){
            result = regex2.exec(statementString)[1].trim();
        }
        try {
            esprima.parseScript(result);
        }catch (e) {
            logger.info(`因语法错误而丢掉语句: ${statementString.trim()}`);
            return '';
        }
    }
    else if (statementString.startsWith('return')) {
        try {
            esprima.parseScript(statementString.replace('return', ''));
        } catch(e) {
            logger.info(`因语法错误而丢掉语句: ${statementString.trim()}`);
            return '';
        }

    }

    else if (statementString.startsWith('while')) {
        try {
            esprima.parseScript(statementString + '{}');
        } catch(e) {
            logger.info(`因语法错误而丢掉语句: ${statementString.trim()}`);
            return '';
        }
    }

    else {
        try {
            esprima.parseScript(statementString.replace(/return/g, "").trim());
        } catch(e) {
            logger.info(`因语法错误而丢掉语句: ${statementString.trim()}`);
            return '{}';
        }
    }

    return statementString;
}

exports.textToCode = textToCode;
