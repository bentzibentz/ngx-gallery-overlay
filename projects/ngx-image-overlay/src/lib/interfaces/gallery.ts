import { Meta } from './meta';

export interface Gallery {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  meta?: Meta;
  images?: {
    url?: string,
    title?: string,
    description?: string,
  }[];
}
