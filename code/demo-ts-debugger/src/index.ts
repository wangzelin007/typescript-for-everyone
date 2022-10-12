/*
 * @Author: wuqinfa
 * @Date: 2022-09-16 17:06:29
 * @LastEditors: wuqinfa
 * @Description: 
 */
import 'module-alias/register';

import sum from '@/utils/sum';
// import sum from './utils/sum';

const first: number = 1;
const second: number = 3;
console.log('first :>> ', first);
console.log('second :>> ', second);
debugger
const result = sum(first, second);

console.log('result :>> ', result);