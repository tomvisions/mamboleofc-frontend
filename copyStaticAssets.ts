import * as shell from 'shelljs';
shell.cp('-R', 'sitemap.xml', 'dist');
shell.cp('-R', 'robots.txt', 'dist');
