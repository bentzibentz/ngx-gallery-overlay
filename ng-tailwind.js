module.exports = {
  // Tailwind Paths
  configJS: 'tailwind.config.js',
  sourceCSS: 'projects/ngx-image-overlay/src/tailwind.css',
  outputCSS: 'projects/ngx-image-overlay/src/lib/assets/utilities.css',
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  extensions: [
    '.ts',
    '.html',
    '.js'
  ],
  extractors: [],
  content: [
    './projects/**/*.js',
    './projects/**/*.html',
    './projects/**/*.ts'
  ]
}
