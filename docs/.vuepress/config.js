// import themeConfig from './public/js/themeConfig.js'
var themeConfig = require('./public/js/themeConfig.js')
// config.js的主要配置包括网站的标题、描述等基本信息，以及主题的配置。
module.exports = {
  //base:默认值: /
  /*
        部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。如 Github pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
        base 将会自动地作为前缀插入到所有以 / 开始的其他选项的链接中，所以你只需要指定一次。
    */
   serviceWorker: true,
  // base: "/vuepress/",

  // title：网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  title: "王森林的个人主页",
  // description：网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  description: "王森林的博客,博客,fivetree",

  // head：额外的需要被注入到当前页面的HTML"head"中的标签
  // 例如：
  head: [
    ["link", { rel: "icon", href: "/img/logo.ico" }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
  ],

  // host指定用于 dev server 的主机名。
  host: "0.0.0.0",
  // 指定 dev server 的端口。
  port: 8080,
  // dest指定 vuepress build 的输出目录。
  // 默认值: .vuepress/dist
  dest: ".vuepress/dist",
  // ga:提供一个 Google Analytics ID 来使 GA 生效。
  // ga:' Google Analytics ID '
  // locales:提供多语言支持的语言配置。
  // locales

  // shouldPrefetch:一个函数，用来控制对于哪些文件，是需要生成 <link rel="prefetch"> 资源提示的
  // shouldPrefetch:() => true

  // contentLoading:是否对异步加载页面的内容开启占位符加载。如果它是一个字符串，那么它应该是自定义加载组件的名称。
  // contentLoading:boolean|string false;

  // cache:boolean|string true;
  /*  也可以命令行：
        vuepress dev docs --cache .cache # 设置 cache 路径
        vuepress dev docs --no-cache     # 在每次构建前删除 cache
    */
  // VuePress 默认使用了 cache-loader 来大大地加快 webpack 的编译速度。
  // 此选项可以用于指定 cache 的路径，同时也可以通过设置为 false 来在每次构建之前删除 cache。

  // theme主题:当你使用自定义主题的时候，需要指定它。
  // theme: 'vuepress-theme-xx'

  // 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
  themeConfig: themeConfig,

  // plugins:使用一个插件。
  plugins: [
    // require('./my-plugin.js'),
    // 'vuepress-plugin-xx' ,
    // 插件名以 vuepress-plugin- 开头，你可以使用缩写来省略这个前缀：
    // 'xxx',
    // 以 @vuepress/plugin- 开头的插件是官方维护的插件。
    "@vuepress/pwa"

    // Babel 式:插件可以通过在配置内的数组中封装名称和选项对象来指定选项
    // [
    //     'vuepress-plugin-xxx',
    //     { /* options */ }
    //   ],

    // 对象式
    // 'xxx': { /* options */ },
  ],
  //   Markdown https://vuepress.vuejs.org/zh/config/#markdown
  markdown: {
    // lineNumbers:true,是否在每个代码块的左侧显示行号。
    // slugify:一个将标题文本转换为 slug 的函数。
    // anchor:markdown-it-anchor 的选项
  },

    // 构建流程
    // postcss:{ plugins: [require('autoprefixer')] },
    // scss:{},

  // Webpack 的别名可以通过 .vuepress/config.js 中 configureWebpack 来配置，
  // 如果给定一个对象，那么它将会被 webpack-merge 合并到最终的配置中，如果给定一个函数，它将会接受 config 作为第一个参数，以及 isServer 作为第二个参数，你可以直接更改 config，也可以返回一个待合并的对象。
  // alias应该更倾向于使用相对路径（Relative URLs）来引用所有的静态资源：
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/"
      }
    }
  }
};
