# 天气卡片

这是一个可以完全放在 GitHub 上运行的天气卡片项目。

- GitHub Pages 显示网页。
- GitHub Actions 定时更新天气数据。
- API key 放在 GitHub Secrets，不写进公开代码。
- GitHub Releases 可以自动生成一个小于 10MB 的 Windows zip。

## 第一步：新建 GitHub 仓库

1. 打开 GitHub。
2. 点右上角 `+`，选择 `New repository`。
3. 仓库名可以填 `weather-card`。
4. 选择 `Public`。
5. 点 `Create repository`。

## 第二步：上传这些文件

把这个项目里的所有文件上传到你的 GitHub 仓库。

上传后，仓库首页应该能看到：

```text
.github/
data/
scripts/
windows/
index.html
README.md
```

## 第三步：添加天气 API key

1. 打开仓库的 `Settings`。
2. 左侧点 `Secrets and variables`。
3. 点 `Actions`。
4. 点 `New repository secret`。
5. Name 填：

```text
WEATHER_API_KEY
```

6. Secret 填你的最美天气 API key。
7. 点 `Add secret`。

## 第四步：运行一次天气更新

1. 打开仓库的 `Actions`。
2. 左侧点 `更新天气数据`。
3. 点 `Run workflow`。
4. 等它变成绿色成功。

之后它会每 3 小时自动更新一次。

## 第五步：开启 GitHub Pages

1. 打开仓库的 `Settings`。
2. 左侧点 `Pages`。
3. `Source` 选择 `Deploy from a branch`。
4. `Branch` 选择 `main`，文件夹选择 `/root`。
5. 点 `Save`。

等一会儿，GitHub 会给你一个网址，通常长这样：

```text
https://你的用户名.github.io/weather-card/
```

## 第六步：生成 Windows zip

1. 打开仓库的 `Actions`。
2. 左侧点 `生成 Windows Release`。
3. 点 `Run workflow`。
4. version 填：

```text
v1.0.0
```

5. 等它变成绿色成功。
6. 打开仓库右侧的 `Releases`。
7. 下载 `weather-card-windows.zip`。

用户解压后双击 `start-weather-card.bat`，就会打开你的 GitHub Pages 天气卡片。

## 常见问题

如果网页只有示例数据，说明还没有成功运行 `更新天气数据`。

如果 Actions 报 `缺少 GitHub Secret：WEATHER_API_KEY`，说明第三步没有设置好。

如果 Windows zip 打不开网页，先确认 GitHub Pages 已经开启，并且网页网址能在浏览器里正常打开。

