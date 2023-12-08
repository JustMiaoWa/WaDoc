// .vuepress/config.js
module.exports = {
    head:[
      ['link',{rel:'icon',href:'/img/top.png'}]
    ],
    title: '哇子学习笔记',
    description: '哇子学习笔记',
    themeConfig: {
      smoothScroll: true,
      logo: '/img/top.png',
      lastUpdated: '最近更新', // string | boolean
      // 导航栏
      nav: [
        { text: '首页', link: '/' },
        {
          text: '软考',
          ariaLabel: 'softexam',
          items:[
            {text:'博主软考之旅',link:'/softexam/myselftrip/'},
            {text:'中级•软件设计师',link:'/softexam/middle/computerFoundation'},
          ]
        },
        { text: '关于', link: '/about/'}
      ],
      // 侧边栏
      sidebar:{
        '/softexam/middle':[
          {
            title:'中级•软件设计师笔记',
            collapsable: false,
            children:[
              { title: '基础知识科目-计算机系统基础知识', path: '/softexam/middle/computerFoundation'},
              { title: '基础知识科目-系统开发和运行知识', path: '/softexam/middle/systemDevelopment'},
              { title: '基础知识科目-面向对象基础知识', path: '/softexam/middle/objectOriented'},
              { title: '基础知识科目-网络与信息安全知识', path: '/softexam/middle/networkAndInfoSecurity'},
              { title: '基础知识科目-标准化信息化和知识产权基础知识', path: '/softexam/middle/intellectualPropertyRight'},
            ]
          }
        ]
      }
    },
    // 解决图片相对路径不以./开头的问题
    markdown: {
      // ......
      extendMarkdown: md => {
        md.use(require("markdown-it-disable-url-encode"));
      }
    }
}