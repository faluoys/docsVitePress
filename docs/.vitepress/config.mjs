import {defineConfig} from 'vitepress';
import {SearchPlugin} from "vitepress-plugin-search";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/docsVitePress/',
    outDir: "../dist",
    head: [
        ['link', { rel: 'icon', href: 'icon/FA1.svg' }]
    ],
    lang: 'zh-CN',
    title: "前端Fa",
    description: "一个前端技术爱好者",
    // locales: {
    //     "/": {
    //         lang: "zh-CN",
    //         title: "前端Fa",
    //         description: "一个前端技术爱好者"
    //     },
    //     "/en/": {
    //         lang: "en-US",
    //         title: "Front-end Fa",
    //         description: "A front-end technology enthusiast"
    //     }
    // },
    // srcDir: "src",
    // vite: {
    //     plugins: [
    //         SearchPlugin({
    //             previewLength: 100, // 这个选项决定了搜索结果预览的长度，单位是字符数
    //             buttonLabel: "搜索", // 这个选项可以用来改变搜索按钮的标签
    //             placeholder: "搜索文档", // 这个选项可以用来设置搜索输入框的占位符
    //             allow: [], // 这是一个数组，你可以在这个数组中指定哪些页面可以被搜索
    //             ignore: [] // 这也是一个数组，你可以在这个数组中指定哪些页面不被搜索
    //         })
    //     ]
    // },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/icon/FA1.svg',
        // siteTitle: false,
        outline: [2, 3],
        outlineTitle: "当前页面",
        docFooter: {
            prev: "上一页",
            next: "下一页"
        },
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "外观",
        lastUpdated: true,
        themeConfig: {
            lastUpdatedText: "最近更新时间"
        },
        localeLinks: {
            items: [
                { text: "简体中文", link: "/" },
                { text: "English", link: "/en" }
            ]
        },
        nav: [
            {text: '首页', link: '/'},
            {text: '开始阅读', link: '/web/outline'},
            {
                text: '资源',
                items: [
                    { text: 'vitepress文档', link: 'https://vitepress.dev/' },
                    { text: '部署文档', link: 'https://vuepress.vuejs.org/zh/guide/deploy.html#google-firebase' },
                    { text: '部署配置-1', link: 'https://juejin.cn/post/7164276166084263972' },
                    { text: '部署配置-2', link: 'https://juejin.cn/post/7064746265266880549#heading-18' },
                    { text: '解决执行bash', link: 'https://blog.csdn.net/air__Heaven/article/details/125756680' },
                ]
            }
        ],

        sidebar: [
            {
                text: "开始阅读",
                link: "/web/outline"
            },
            {
                text: '🍓Web前端',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '大纲', link: '/web/outline'},
                    {text: '指引', link: '/web/zhiyin'},
                ]
            },
            {
                text: '🧀JavaScript',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '基础', link: '/javascript/Basics.md'},
                    {text: '进阶', link: '/javascript/Upgrade'},
                ]
            },
            {
                text: '🥞Vue.js',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '基础', link: '/Vue/Basics.md'},
                    {text: '进阶', link: '/Vue/Upgrade'},
                ]
            },
            {
                text: '🥣React.js',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '基础', link: '/React/Basics.md'},
                    {text: '进阶', link: '/React/Upgrade'},
                ]
            },
            {
                text: '🥝Node.js',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '基础', link: '/Node/Basics.md'},
                    {text: '进阶', link: '/Node/Upgrade'},
                ]
            },
            {
                text: '🥑Git',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: '基础', link: '/Git/Basics.md'},
                    {text: '进阶', link: '/Git/Upgrade'},
                ]
            },
            {
                text: '🍎Examples',
                collapsible: true,
                collapsed: true,
                items: [
                    {text: 'Markdown Examples', link: '/Examples/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/Examples/api-examples'},
                ]
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/faluoys'},
            {
                icon: {
                    svg: "<svg id=\"douyin\" t=\"1570181112474\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2916\" width=\"128\" height=\"128\"> <path d=\"M937.386667 423.850667a387.84 387.84 0 0 1-232.874667-77.824v352.341333C704.512 878.250667 565.930667 1024 394.922667 1024S85.333333 878.250667 85.333333 698.368c0-179.882667 138.581333-325.632 309.589334-325.632 17.066667 0 33.706667 1.450667 49.92 4.266667v186.624a131.754667 131.754667 0 0 0-48.64-9.216c-76.288 0-138.154667 65.024-138.154667 145.322666 0 80.213333 61.866667 145.322667 138.24 145.322667 76.202667 0 138.069333-65.109333 138.069333-145.322667V0h172.714667c0 134.485333 103.68 243.541333 231.594667 243.541333v180.309334h-1.28\" p-id=\"2917\"></path> </svg>"
                },
                link: 'https://v.douyin.com/iRGFsyeS/ 8@5.com 02/22'
            }
        ],
        footer: {
            message: "<a href=\"#\" target=\"_blank\">xxxxxxx</a>",
            copyright: "Copyright © 2023-present xxxxxx"
        },
        editLink: {
            pattern: 'https://github.com/faluoys/docsVitepress/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        //广告
        // carbonAds: {
        //     code: 'your-carbon-code',
        //     placement: 'your-carbon-placement'
        // },
        // search: {
        //     provider: "algolia",
        //     options: {
        //         appId: "8J64VVRP8K",
        //         apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        //         indexName: "vitepress"
        //     }
        // },
        // search: {
        //     provider: "local",
        //     options: {
        //         translations: {
        //             button: {
        //                 buttonText: "搜索文档",
        //                 buttonAriaLabel: "搜索文档"
        //             },
        //             modal: {
        //                 noResultsText: "无法找到相关结果",
        //                 resetButtonTitle: "清除查询条件",
        //                 footer: {
        //                     selectText: "选择",
        //                     navigateText: "切换"
        //                 }
        //             }
        //         }
        //     }
        // }
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        placeholder: '搜索文档',
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: '清除查询条件',
                                    resetButtonAriaLabel: '清除查询条件',
                                    cancelButtonText: '取消',
                                    cancelButtonAriaLabel: '取消'
                                },
                                startScreen: {
                                    recentSearchesTitle: '搜索历史',
                                    noRecentSearchesText: '没有搜索历史',
                                    saveRecentSearchButtonTitle: '保存至搜索历史',
                                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                                    favoriteSearchesTitle: '收藏',
                                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                                },
                                errorScreen: {
                                    titleText: '无法获取结果',
                                    helpText: '你可能需要检查你的网络连接'
                                },
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭',
                                    searchByText: '搜索提供者'
                                },
                                noResultsScreen: {
                                    noResultsText: '无法找到相关结果',
                                    suggestedQueryText: '你可以尝试查询',
                                    reportMissingResultsText: '你认为该查询应该有结果？',
                                    reportMissingResultsLinkText: '点击反馈'
                                }
                            }
                        }
                    }
                }
            }
        },
    }
})
