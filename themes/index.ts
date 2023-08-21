const fs = require('fs');
import {lightTheme} from "./light-theme";

//Generating SCSS variables from ant-design tokens is necessary.
const filePath = 'themes/antd.tokens.scss'
const scssContent = Object.keys(lightTheme.token).map((key) => {
  // @ts-ignore
  return `$${key}: ${lightTheme.token[key]};`;
}).join('\n');

fs.writeFileSync(filePath, scssContent);
