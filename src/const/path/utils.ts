import {allPaths, PagePath} from './definitions';


export const isPagePath = (path: string): path is PagePath => {
  return allPaths.some((pagePath) => pagePath === path);
};
