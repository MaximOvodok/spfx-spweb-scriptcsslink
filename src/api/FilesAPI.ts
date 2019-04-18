import pnp, { Web } from "@pnp/pnpjs";

export default class AssetsHelper {
    public static GetStylesPaths(webUrl: string): Promise<Array<string>> {
        return new Promise<Array<string>>(async (resolve, reject) => {
            try {
                let web = new Web(webUrl);
                let masterPageCatalog = await web.getCatalog(116);
                let folder = await masterPageCatalog.rootFolder.folders.getByName("Styles");
                let files = await folder.files.get();
                let stylesPaths = files.filter(f => f["ServerRelativeUrl"].endsWith(".css")).map(f => f["ServerRelativeUrl"]);
                resolve(stylesPaths);
            }
            catch (error) {
                reject(error);
            }
        });
    }

    public static GetScriptsPaths(webUrl: string): Promise<Array<string>> {
        return new Promise<Array<string>>(async (resolve, reject) => {
            try {
                let web = new Web(webUrl);
                let masterPageCatalog = await web.getCatalog(116);
                let folder = await masterPageCatalog.rootFolder.folders.getByName("Scripts");
                let files = await folder.files.get();
                let scriptsPaths = files.filter(f => f["ServerRelativeUrl"].endsWith(".js")).map(f => f["ServerRelativeUrl"]);
                resolve(scriptsPaths);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}