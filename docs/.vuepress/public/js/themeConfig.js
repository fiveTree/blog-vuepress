module.exports = {
  locales: {
    // "/": {
    //   selectText: "Languages",
    //   label: "English",
    //   editLinkText: "Edit this page on GitHub",
    //   serviceWorker: {
    //     updatePopup: {
    //       message: "New content is available.",
    //       buttonText: "Refresh"
    //     }
    //   },
    //   algolia: {},
    //   nav: [
    //         {
    //             text: 'Languages',
    //             items: [
    //                 { text: 'Chinese', link: '/zh/' },
    //                 { text: 'English', link: '/en/' }
    //             ]
    //         },
    //     ],
    // //   sidebar: {
    // //     "/": [
    // //       /* ... */
    // //     ],
    // //     "/nested/": [
    // //       /* ... */
    // //     ]
    // //   }
    // },
    // "/zh/": {
    //   // 多语言下拉菜单的标题
    //   selectText: "选择语言",
    //   // 该语言在下拉菜单中的标签
    //   label: "简体中文",
    //   // 编辑链接文字
    //   editLinkText: "在 GitHub 上编辑此页",
    //   // Service Worker 的配置
    //   serviceWorker: {
    //     updatePopup: {
    //       message: "发现新内容可用.",
    //       buttonText: "刷新"
    //     }
    //   },
    //   // 当前 locale 的 algolia docsearch 选项
    //   algolia: {},
    //   nav: [
    //     {
    //         text: '选择语言',
    //         items: [
    //             { text: '中文', link: '/zh/' },
    //             { text: '英语', link: '/en/' }
    //         ]
    //     },
    //   ],
    //   sidebar: {
    //     "/zh/": [
    //       /* ... */
    //     ],
    //     "/zh/nested/": [
    //       /* ... */
    //     ]
    //   }
    // }
  },
  nav: [
    { text: "主页", link: "/" },
    { text: '前端开发',
      items: [
        { text: 'javascript', link: '/js/' },
        { text: 'css', link: '/css/' },
        { text: 'html', link: '/html/' },
        { text: 'other', link: '/other/' }
      ] 
    },
    { text: 'Git', link: '/git/introduction' },
    { text: "Node", link: "/node/" },
    { text: "关于", link: "/about/" },
    { text: "GitHub", link: "https://github.com/fiveTree" }
  ],
  sidebar: 'auto',
  sidebar:{
    '/js/':[
      'js1',
      'js'
    ],
    '/css/':[
    ],
    '/html/':[
    ],
    '/git/':[
      'introduction',
      'install',
      'command',
      'branch',
      'resolveConflict',
      'teamwork',
    ]
  }
};
