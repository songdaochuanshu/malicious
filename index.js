/*
 * @Descripttion: 
 * @version: 
 * @Author: MiKin
 * @Date: 2022-01-19 20:50:57
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-19 21:04:31
 * @FilePath: \新建文件夹\index.js
 */
const fs = require('fs');
const path = require('path');

const replacePrefix = (dir, prefix) => {
    const files = fs.readdirSync(dir);
    files.forEach(async file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            replacePrefix(filePath, prefix);
        } else {
            const content = fs.readFileSync(filePath, 'utf-8');
            const newContent = content.replace(/\w+/g, prefix);
            fs.writeFileSync(filePath, newContent);
        }
    });
}

replacePrefix(process.cwd(), '松岛川树');