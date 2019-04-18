import { override } from '@microsoft/decorators';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import FilesAPI from '../../api/FilesAPI';

/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpWebScriptCSSLinkApplicationCustomizer extends BaseApplicationCustomizer<{}> {
  @override
  public onInit(): Promise<void> {
    const { pageContext:{web:{absoluteUrl}} } = this.context;

    FilesAPI.GetStylesPaths(absoluteUrl).then((stylesPaths) => {
        stylesPaths.forEach(path => {
          this.loadStyle(path);
        });

        return FilesAPI.GetScriptsPaths(absoluteUrl);
      }).then((scriptsPaths) => {
        scriptsPaths.forEach(path => {
          this.loadScript(path);
        });
      });

    return Promise.resolve();
  }

  private loadStyle(cssUrl): void {
    if (cssUrl) {
      // inject the style sheet
      const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
      let customStyle: HTMLLinkElement = document.createElement("link");
      customStyle.href = cssUrl;
      customStyle.rel = "stylesheet";
      customStyle.type = "text/css";
      head.insertAdjacentElement("beforeEnd", customStyle);
    }
  }

  private loadScript(scriptUrl): void {
    const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
    let customScript: HTMLScriptElement = document.createElement("script");
    customScript.src = scriptUrl;
    customScript.type = "text/javascript";
    head.insertAdjacentElement("beforeEnd", customScript);
  }
}
