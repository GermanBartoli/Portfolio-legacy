import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ["index.html","inner-page.html","portfolio-details.html","assets","img"]) await cp(file, 'dist/' + file, { recursive: true });
console.log('Sitio estático generado en dist/.');
