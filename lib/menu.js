import fs from 'fs';
import path from 'path';

const constantDirectory = path.join(process.cwd(), 'constant');

export function getMenu(){
  const filename = path.join(constantDirectory,'menu.json');
  const menuStr = fs.readFileSync(filename, 'utf-8');
  const menu = JSON.parse(menuStr);
  return menu;
}