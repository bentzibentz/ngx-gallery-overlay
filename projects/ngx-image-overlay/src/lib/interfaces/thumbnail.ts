export interface Thumbnail {
  alt: string;
  title: string;
  src: string;
  srcSet?: ThumbnailSrcSet;
  sizes?: ThumbnailSizes;
  className?: string;
}

export interface ThumbnailSrcSet {
  [index: number]: string;
}


export interface ThumbnailSizes {
  [index: number]: string;
}
