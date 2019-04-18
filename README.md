# spfx-spweb-scriptcsslink
SPFx extension which allows to apply customizations by CSS and JavaScript for SharePoint site with Modern UI

How to install:
1. Clone the repository and open solution in VSCode
2. Open terminal enter next commands:
```shell
npm install
gulp bundle --ship
gulp package-solution --ship
```
3. Go to `sharepoint/solution` and deploy `spweb-scriptcsslink.sppkg` file to `AppCatalog`
4. Go to your SharePoint site and add app
5. Put your CSS files to `_catalogs/masterpages/Styles`
6. Put your JS files to `_catalogs/masterpages/Scripts`
7. Check applied your customizations on modern pages

If customizations didn't work:
1. Clear browser cache then refresh page
2. Validate your scripts and styles
3. Open issue on GitHub (if 1 and 2 steps didn't work)
