# Weather Card
![Weather Card Logo](assets/logo.png)

Weather Card is a small weather app that runs entirely on GitHub.

- GitHub Pages hosts the web page.
- GitHub Actions updates the weather data every 3 hours.
- The weather API key is stored in GitHub Secrets, not in public code.
- GitHub Releases can build a Windows zip package under 10 MB.

## Live Site

After GitHub Pages is enabled, the site will usually be available at:

```text
https://crazyxw6.github.io/weather-card/
```

## Repository Files

```text
.github/workflows/update-weather.yml
.github/workflows/release.yml
data/weather.json
scripts/cities.json
scripts/update-weather.mjs
windows/README.txt
index.html
README.md
```

## Weather API Secret

Add a repository secret named:

```text
WEATHER_API_KEY
```

Steps:

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Secrets and variables` -> `Actions`.
4. Click `New repository secret`.
5. Set `Name` to `WEATHER_API_KEY`.
6. Paste your weather API key into `Secret`.
7. Click `Add secret`.

## Update Weather Data

1. Open the `Actions` tab.
2. Select `Update Weather Data`.
3. Click `Run workflow`.
4. Wait until the workflow finishes successfully.

The workflow also runs automatically every 3 hours.

## Enable GitHub Pages

1. Open `Settings`.
2. Open `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Set `Branch` to `main` and folder to `/root`.
5. Click `Save`.

## Build the Windows Release

1. Open the `Actions` tab.
2. Select `Build Windows Release`.
3. Click `Run workflow`.
4. Enter a version, for example:

```text
v1.0.5
```

5. Wait until the workflow finishes successfully.
6. Open `Releases`.
7. Download `weather-card-windows.zip`.

After extracting the zip, run:

```text
WeatherCard.exe
```

## Notes

The Windows app opens Weather Card in a standalone app window. It still needs an internet connection because weather data is updated online.

If the app does not open, update Microsoft Edge or install Microsoft Edge WebView2 Runtime.

