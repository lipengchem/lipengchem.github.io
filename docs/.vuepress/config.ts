/**
 * 最终版 VuePress v1 + vdoing 配置，使用 KaTeX 插件支持公式渲染
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode'
import htmlModules from './config/htmlModules'

const DOMAIN_NAME = 'lipengchem.github.io'
const WEB_SITE = `https://${DOMAIN_NAME}`

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "lipeng's blog",
      description: '计算化学小白的学习日常',
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '理论基础',
        link: '/theory/',
        items: [
          {
            text: '量子化学基础',
            items: [
              { text: '密度泛函理论', link: '/theory/DFT/001/' },
            ],
          },
          {
            text: '固体物理基础',
            items: [
              { text: '晶格动力学', link: '/theory/physics/001/' },
            ],
          },
          {
            text: '泛函与基组',
            items: [
              { text: '常见泛函选取与设置', link: '/theory/XC/001/' },
            ],
          },
        ],
      },
      {
        text: '计算程序',
        link: '/application/',
        items: [
          {
            text: 'VASP',
            items: [
              { text: '功函数', link: '/application/vasp/001/' },
              { text: 'VASP输入文件', link: '/application/vasp/002/' },
              { text: 'VASP输出文件', link: '/application/vasp/003/' },
              { text: '态密度', link: '/application/vasp/004/' },
            ],
          },
          
        ],
      },
      {
        text: '建模可视化',
        link: '/visualization/',
        items: [
          {
            text: 'Materials Studio',
            items: [
              { text: 'Materials Studio安装', link: '/visualization/MS/001/' },
            ],
          },
        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          {
            text: 'Linux',
            items: [
              { text: 'Linux命令大全', link: '/more/Linux/001/' },
              { text: '编辑器的使用', link: '/more/Linux/002/' },
            ],
          },
          {
            text: '机器学习',
            items: [
              { text: '机器学习基础', link: '/more/machine_learning/001/' },
              { text: '模型评估与优化', link: '/more/machine_learning/002/' },
            ],
          },
        ],
      },
      { text: '关于', link: '/about/' },
      { text: '收藏', link: '/collection/001/' },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2,
    logo: '/img/logo.png',
    repo: 'lipengchem/lipengchem.github.io',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑',
    sidebar: 'structuring',
    author: { name: 'lipeng', link: 'https://github.com/lipengchem' },
    blogger: { avatar: '/img/touxiang.jpg', name: 'lipeng', slogan: '计算化学，理论催化' },
    social: {
      icons: [
        { iconClass: 'icon-youjian', title: '发邮件', link: 'mailto:lipengchem@163.com' },
        { iconClass: 'icon-github', title: 'GitHub', link: 'https://github.com/lipengchem' },
        { iconClass: 'icon-erji', title: '听音乐', link: 'https://music.163.com/#/my/m/music/playlist?id=2803470986' },
      ],
    },
    footer: {
      createYear: 2025,
      copyrightInfo:
        'Lipeng | <a href="https://github.com/lipengchem" target="_blank">GitHub</a>' +
        ' | <a href="https://github.com/lipengchem/lipengchem.github.io/blob/master/LICENSE" target="_blank">MIT License</a>'
    },
    extendFrontmatter: {
      author: {
        name: 'lipeng',
        link: 'https://github.com/lipengchem'
      }
    },
    htmlModules
  },

  head: [
    ['link', { rel: 'icon', href: '/img/favicon_lp.ico' }],
    ['meta', { name: 'keywords', content: '量子化学,分子模拟,第一性原理,VASP,Gaussian,DFT,分子动力学' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
  ],

  plugins: <UserPlugins>[
     'vuepress-plugin-mathjax',
    ['sitemap', { hostname: WEB_SITE }],
    'vuepress-plugin-baidu-autopush',
    ['vuepress-plugin-baidu-tongji', { hm: baiduCode }],
    [
      'thirdparty-search',
      {
        thirdparty: [
          { title: '在MDN中搜索', frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=' },
          { title: '在Runoob中搜索', frontUrl: 'https://www.runoob.com/?s=' },
          { title: '在Vue API中搜索', frontUrl: 'https://cn.vuejs.org/v2/api/#' },
          { title: '在Bing中搜索', frontUrl: 'https://cn.bing.com/search?q=' },
          { title: '通过百度搜索本站的', frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20` },
        ],
      },
    ],
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      'demo-block',
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false,
        },
      },
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: { bgColor: 'rgba(0,0,0,0.6)' },
      },
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'Ov23li3toQAnKM2feIY0',
          clientSecret: '5c23753648c3f8fc90e0eeac3de45884409ebf1b',
          repo: 'blog-comments',
          owner: 'lipengchem',
          admin: ['lipengchem'],
          pagerDirection: 'last',
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>',
          title: '「评论」<%- frontmatter.title %>',
          labels: ['Gitalk', 'Comment'],
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
        },
      },
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp: number): string => dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss'),
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts']
})
