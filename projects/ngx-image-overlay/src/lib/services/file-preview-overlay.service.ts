import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

import { GalleryOverlayComponent } from '../component/gallery-overlay/gallery-overlay.component';

import { FilePreviewOverlayRef } from '../references/file-preview-overlay-ref';
import { FILE_PREVIEW_DIALOG_DATA } from '../references/file-preview-overlay.tokens';
import { Gallery } from '../interfaces/gallery';

const DEFAULT_CONFIG: Gallery = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'ngIoV-image-overlay',
  images: null
};

@Injectable()
export class FilePreviewOverlayService {

  constructor(
    private injector: Injector,
    private overlay: Overlay) { }

  open(config: Gallery = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    const overlayComponent = this.attachDialogContainer(overlayRef, dialogConfig, dialogRef);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: Gallery) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(overlayRef: OverlayRef, config: Gallery, dialogRef: FilePreviewOverlayRef) {
    const injector = this.createInjector(config, dialogRef);

    const containerPortal = new ComponentPortal(GalleryOverlayComponent, null, injector);
    const containerRef: ComponentRef<GalleryOverlayComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: Gallery, dialogRef: FilePreviewOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(FilePreviewOverlayRef, dialogRef);
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, config);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: Gallery): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
