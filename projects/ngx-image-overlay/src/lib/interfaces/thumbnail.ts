export interface Thumbnail {
  alt: string;
  src: string;
  srcSet: '';
  sizes: Array<ThumbnailSizes>;
  className?: string;
}

export interface ThumbnailSrcSet {
  alt: string;
  src: string;
  srcSet: '';
  className?: string;
}


export interface ThumbnailSizes {
  size: string;
  mediaCondition?: string;
}
