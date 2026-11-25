import { mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');
const [index, css, collision, faunaTimers, js] = await Promise.all([
  read('src/index.html'),
  read('src/slimepet.css'),
  read('src/collision.js'),
  read('src/fauna-timers.js'),
  read('src/slimepet.js'),
]);

const html = index
  .replace('<link rel="stylesheet" href="slimepet.css">', () => '<style>' + css + '</style>')
  .replace('<script src="collision.js"></script>', () => '<script>' + collision + '</script>')
  .replace('<script src="fauna-timers.js"></script>', () => '<script>' + faunaTimers + '</script>')
  .replace('<script src="slimepet.js"></script>', () => '<script>' + js + '</script>');
const assetPattern = /\.\.\/(?:assets(?:_noturnos)?\/[a-z0-9_-]+\.png|assets_audios\/[a-z0-9_-]+\.mp3(?:\.mpeg)?)/gi;
const paths = [...new Set(html.match(assetPattern))];
const embeddedAssets = new Map(await Promise.all(paths.map(async (path) => {
  const bytes = await readFile(new URL(path.slice(3), root));
  const mimeType = path.toLowerCase().endsWith('.png') ? 'image/png' : 'audio/mpeg';
  return [path, 'data:' + mimeType + ';base64,' + bytes.toString('base64')];
})));
const offline = html.replace(assetPattern, (path) => embeddedAssets.get(path));

if (process.argv.includes('--pages')) {
  await mkdir(new URL('dist/pages/', root), { recursive: true });
  await writeFile(new URL('dist/pages/index.html', root), offline);
  process.exit(0);
}

await mkdir(new URL('dist/', root), { recursive: true });
await writeFile(new URL('dist/JOGAR_SLIMEPET_LIZ_V41_R9_OFFLINE.html', root), offline);
const original = await readFile(new URL('backup/V41_R8_original.html', root)).catch(error => {
  if (error.code !== 'ENOENT') throw error;
});
if (original) {
  await writeFile(new URL('dist/JOGAR_SLIMEPET_LIZ_V41_R8_OFFLINE.html', root), original);
}
