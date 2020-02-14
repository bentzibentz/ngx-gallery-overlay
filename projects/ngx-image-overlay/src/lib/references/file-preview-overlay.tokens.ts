import { InjectionToken } from '@angular/core';

import { Gallery } from '../interfaces/gallery';

export const FILE_PREVIEW_DIALOG_DATA = new InjectionToken<Gallery>('FILE_PREVIEW_DIALOG_DATA');
