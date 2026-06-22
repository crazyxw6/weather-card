import { mkdir, readFile, writeFile } from 'node:fs/promises';

const WEATHER_API = 'https://sh1pub.zuimeitianqi.com/pubDataServer/getweatherpub';
const apiKey = process.env.WEATHER_API_KEY;

if (!apiKey) {
  throw new Error('缺少 GitHub Secret：WEATHER_API_KEY');
}

const cities = JSON.parse(await readFile(new URL('./cities.json', import.meta.url), 'utf8'));
const weather = {};
const errors = {};

function cityKey(city) {
  return `${city.code}:${city.codeType || ''}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (const city of cities) {
  const url = new URL(WEATHER_API);
  url.searchParams.set('apikey', apiKey);
  url.searchParams.set('lon', '');
  url.searchParams.set('lat', '');
  url.searchParams.set('citycode', city.code);
  if (city.codeType) {
    url.searchParams.set('codeType', city.codeType);
  }

  try {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    const text = await response.text();
    const json = JSON.parse(text);

    if (!response.ok || json.resultcode !== '0') {
      errors[cityKey(city)] = json.resultinfo || `HTTP ${response.status}`;
    } else {
      weather[cityKey(city)] = json.data;
    }
  } catch (error) {
    errors[cityKey(city)] = error.message;
  }

  await sleep(300);
}

if (Object.keys(weather).length === 0) {
  throw new Error('所有城市的天气数据都更新失败，请检查 WEATHER_API_KEY 或天气接口状态。');
}

await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(
  new URL('../data/weather.json', import.meta.url),
  `${JSON.stringify({
    updatedAt: new Date().toISOString(),
    cities,
    weather,
    errors,
  }, null, 2)}\n`,
  'utf8',
);

console.log(`已更新 ${Object.keys(weather).length} 个城市。`);

