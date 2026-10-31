import { LOCALE_STORAGE_KEY, defaultLocale, locales } from "./config";

/**
 * Inline script for pages without a language in the URL ("/" and old links
 * like "/bar"). The site is a static export, so there is no server to read
 * Accept-Language; this picks the visitor's saved choice, else the browser
 * language, else English, and replaces the URL with the prefixed one.
 *
 * `onlyKnown` limits the redirect to real routes so typos still show the 404.
 */
export function localeRedirectScript(knownPaths: string[] | null): string {
  return `(function(){
var L=${JSON.stringify(locales)},K=${JSON.stringify(LOCALE_STORAGE_KEY)},D=${JSON.stringify(defaultLocale)};
var known=${JSON.stringify(knownPaths)};
var path=location.pathname.replace(/\\/+$/,"").replace(/\\.html$/,"")||"/";
if(known&&known.indexOf(path)<0)return;
var l=null;try{l=localStorage.getItem(K)}catch(e){}
if(L.indexOf(l)<0){var n=((navigator.languages&&navigator.languages[0])||navigator.language||"").toLowerCase().slice(0,2);l=L.indexOf(n)>=0?n:D}
location.replace("/"+l+(path==="/"?"":path)+location.search+location.hash);
})();`;
}
