# Artikel Series by ULTIMAGZ

This project is defined as web application to collect articles with same topic or special series from [ULTIMAGZ](https://ultimagz.com). This project is built with Svelte and TailwindCSS.

> ~~Only `localhost:8080` is allowed to access the **ULTIMAGZ WP API**. So keep in mind to use localhost:8080 while developing this project.~~ [DEPRECATED]

## Features

-   ✅ Fetching series from static JSON file
-   ✅ Fetching related articles from ULTIMAGZ WP API
-   ✅ Responsive design
-   ✅ Error handling
-   👟 Standarized code style with ESLint
-   ❌ Dark mode
-   ❌ Google Analytics
-   ❌ Dynamic series fetching from database (preferably Airtable)

## Project setup

1. Clone this repository
2. Install dependencies
    ```bash
    npm install
    ```
3. Run the project
    ```bash
    npm run dev
    ```
4. Open your browser and go to `localhost:8080`

## Working Environment

> This project applied `production` and `staging` environment. So, you can test the project in staging environment **before deploying it to production**.

> Please don't push to `main` branch directly. Push to `staging` branch first, and then merge it to `main` branch.

### URL

-   Production: https://series.ultimagz.com/
-   Staging: https://staging-ultimagz-artikel-series.vercel.app/

### Deploy Stack

This project is deployed with [Vercel](https://vercel.com/). You can deploy this project to production by pushing to `main` branch. And deploy to staging by pushing to `staging` branch.

## Acknowledgements

Please dont ruin this project. This project is built with love by [ULTIMAGZ 2023](https://ultimagz.com) team.
