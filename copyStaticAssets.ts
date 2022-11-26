import * as shell from 'shelljs';
console.log('dd');
shell.cp('-R', 'sitemap.xml', 'dist');
shell.cp('-R', 'robots.txt', 'dist');
