export const PATH_ROOT = '/[lang]';

export enum GeneralPath {
  // Home
  HOME = '/',
}

export const allPaths = ([] as Array<PagePath>).concat(
  ...[GeneralPath].map(
    (paths) => Object.values(paths),
  ),
);

export type PagePath = GeneralPath;
