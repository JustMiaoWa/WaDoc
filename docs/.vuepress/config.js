// .vuepress/config.js
module.exports = {
    head:[
      ['link',{rel:'icon',href:'/img/top.png'}]
    ],
    title: '哇记',
    description: '哇记',
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
        {
          text: '公路车知识',
          link: '/roadbikes/zz'
        },
        { 
          text: '关于', 
          link: '/about/'
        },
        { 
          text:'笔记',  
          ariaLabel: 'notes',
          items:[
            {text:'前端',items:[
              {text:'JS高级',link:'/notes/front/JSGaoji/jsAdvance'},
              {text:'Vue-cli搭建Vue2',link:'/notes/front/Vue2'},
              {text:'Vite搭建Vue3',link:'/notes/front/Vue3'},
            ]},
            {
              text:'Linux',
              items:[
                {text:'Linux基础',link:'/notes/linux/LinuxBase'},
                {text:'Linux实战',link:'/notes/linux/LinuxShizhan'},
                {text:'Docker基础',link:'/notes/linux/DockerBase'}
              ]
            }
          ]
        }
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
        ],
        '/notes/front/JSGaoji':[
          {
            title:'JS高级',
            collapsable: false,
            children:[
              { title:'JS高级知识', path:'/notes/front/JSGaoji/jsAdvance'},
              { title:'JS模块化', path:'/notes/front/JSGaoji/jsModule'}
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