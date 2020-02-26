<h1 align="center">Angular Image Gallery Overlay</h1>

<p align="center">Add beautiful image gallery overlay to your project, inspired by the new <a href="https://www.spiegel.de/panorama/wangerooge-badestrand-nach-sturmfluten-fast-vollstaendig-weg-a-767933a5-4d9c-447b-8029-159d74b6efe2" target="_blank">spiegel magazin</a> image gallery.</p>


[![npm](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://bentzibentz.github.io/ngx-gallery-overlay-demo/)
[![npm](https://img.shields.io/npm/v/@ngx-image-overlay/core.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ngx-image-overlay)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)


## Docs

### Dependencies
ngx image overlay depends on the angular cdk.

1. [Angular CDK](https://material.angular.io/cdk/categories)

#### NPM
```  
npm i @angular/cdk
```
        
#### YARN
```          
yarn add @angular/cdk
```

### Installation

#### NPM
```  
npm i ngx-image-overlay
```
        
#### YARN
```          
yarn add ngx-image-overlay
```

### Usage

Follow below steps to add ngx image overlay to your project

#### 1. Import Overlay from the angular cdk

You need to import the ```Overlay``` in the providers array of your app where you want to use it.

You need to import the ```NgxImageOverlayModule``` in the module of your app where you want to use it.

```typescript        
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Import the overlay provider*/
import { Overlay } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxImageOverlayModule // Import here
    ],
    providers: [
        Overlay // Import here
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```  

#### 2. Use <lib-ngx-image-overlay> in your HTML

In your HTML: Use the ```<lib-ngx-image-overlay>``` wherever you like in your project.

```html        
<lib-ngx-image-overlay  
    [thumbnail]='image' 
    [meta]='meta'
    [gallery]='gallery'>
</lib-ngx-image-overlay>
```

#### 3. Structure of data to display the image overlay

Make sure the structure of your objects should look like the objects shown below:
   
```typescript
image = {
    alt: 'Strand ohne Sand',
    title: 'Strand ohne Sand',
    src: 'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    srcSet: [
        'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 616w',
        'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 444w',
        'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80 718w'
    ],
    sizes: [
        '(max-width: 30em) 100vw',
        '(max-width: 50em) 50vw',
        'calc(33vw - 100px)'
    ],
    className: 'yourClassName'
};
```

```typescript
meta = {
    copyright: 'Unsplash / Photos for everyone',
    title: 'Lorem ipsum dolor sit',
    buttonLabel: 'Images',
    closeLabel: 'Close',
    backLabel: 'Back to article',
    label: 'photo gallery'
};
```

```typescript
gallery = {
    meta: this.meta,
    images: [
        {
            url: 'https://images.unsplash.com/photo-1473805776446-12df95e07592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Image Title 1',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
            url: 'https://images.unsplash.com/photo-1542145748-65931190d151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
            title: 'Image Title 2',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
            url: 'https://images.unsplash.com/photo-1582148459946-2852aa3fb5ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            title: 'Image Title 3',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
            url: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
            title: 'Image Title 4',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
            url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            title: 'Image Title 5',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        },
        {
            url: 'https://images.unsplash.com/photo-1582142689530-e0ed343bb509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            title: 'Image Title 6',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        }
    ]
};
```

- Package is not production ready, development only.

## Issues

If you identify any errors in this module, or have an idea for an improvement, please feel free to submit an PR.

## Author

 **[Fabian Bentz](https://www.fabianbentz.de)**

- [github/bentzibentz](https://github.com/bentzibentz)
