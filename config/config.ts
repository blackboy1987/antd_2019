import { IConfig, IPlugin } from 'umi-types';

import defaultSettings from './defaultSettings';
// https://umijs.org/config/
import slash from 'slash2';
import webpackPlugin from './plugin.config';

const { pwa, primaryColor } = defaultSettings;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';

const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false,
      // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

// 针对 preview.pro.ant.design 的 GA 统计代码
if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  plugins,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        {
          path: '/',
          name: 'welcome',
          icon: 'smile',
          component: './Welcome',
        },
        {
          path: 'general',
          name: 'general',
          icon: 'general',
          routes:[
            {
              path: '/general/button',
              name: 'button',
              icon: 'button',
              component: './General/Button',
              routes:[
                {
                  path: '/general/button',
                  redirect: '/general/button/01',
                },
                {
                  path: '/general/button/01',
                  component: './General/Button/Button01',
                },
                {
                  path: '/general/button/02',
                  component: './General/Button/Button02',
                },
                {
                  path: '/general/button/03',
                  component: './General/Button/Button03',
                },
                {
                  path: '/general/button/04',
                  component: './General/Button/Button04',
                },
                {
                  path: '/general/button/05',
                  component: './General/Button/Button05',
                },
                {
                  path: '/general/button/06',
                  component: './General/Button/Button06',
                },
                {
                  path: '/general/button/07',
                  component: './General/Button/Button07',
                },
                {
                  path: '/general/button/08',
                  component: './General/Button/Button08',
                },
                {
                  path: '/general/button/09',
                  component: './General/Button/Button09',
                }
              ]
            },
            {
              path: '/general/icon',
              name: 'icon',
              icon: 'icon',
              component: './General/Icon',
              routes:[
                {
                  path: '/general/icon',
                  redirect: '/general/icon/01',
                },
                {
                  path: '/general/icon/01',
                  component: './General/Icon/Index01',
                },
                {
                  path: '/general/icon/02',
                  component: './General/Icon/Index02',
                },
                {
                  path: '/general/icon/03',
                  component: './General/Icon/Index03',
                },
                {
                  path: '/general/icon/04',
                  component: './General/Icon/Index04',
                },
              ]
            },
            {
              path: '/general/typography',
              name: 'typography',
              icon: 'typography',
              component: './General/Typography',
              routes:[
                {
                  path: '/general/typography',
                  redirect: '/general/typography/01',
                },
                {
                  path: '/general/typography/01',
                  component: './General/Typography/Index01',
                },
                {
                  path: '/general/typography/02',
                  component: './General/Typography/Index02',
                },
                {
                  path: '/general/typography/03',
                  component: './General/Typography/Index03',
                },
                {
                  path: '/general/typography/04',
                  component: './General/Typography/Index04',
                },
                {
                  path: '/general/typography/05',
                  component: './General/Typography/Index05',
                },
              ]
            },
          ]
        },
        {
          path: 'layout',
          name: 'layout',
          icon: 'layout',
          routes:[
            {
              path: '/layout/grid',
              name: 'grid',
              icon: 'grid',
              component: './Layout/Grid',
              routes:[
                {
                  path: '/layout/grid',
                  redirect: '/layout/grid/01',
                },
                {
                  path: '/layout/grid/01',
                  component: './Layout/Grid/Index01',
                },
                {
                  path: '/layout/grid/02',
                  component: './Layout/Grid/Index02',
                },
                {
                  path: '/layout/grid/03',
                  component: './Layout/Grid/Index03',
                },
                {
                  path: '/layout/grid/04',
                  component: './Layout/Grid/Index04',
                },
                {
                  path: '/layout/grid/05',
                  component: './Layout/Grid/Index05',
                },
                {
                  path: '/layout/grid/06',
                  component: './Layout/Grid/Index06',
                },
                {
                  path: '/layout/grid/07',
                  component: './Layout/Grid/Index07',
                },
                {
                  path: '/layout/grid/08',
                  component: './Layout/Grid/Index08',
                },
                {
                  path: '/layout/grid/09',
                  component: './Layout/Grid/Index09',
                },
                {
                  path: '/layout/grid/10',
                  component: './Layout/Grid/Index10',
                }
              ]
            },
            {
              path: '/layout/layout',
              name: 'layout',
              icon: 'layout',
              component: './Layout/Layout',
              routes:[
                {
                  path: '/layout/layout',
                  redirect: '/layout/layout/01',
                },
                {
                  path: '/layout/layout/01',
                  component: './Layout/Layout/Index01',
                },
                {
                  path: '/layout/layout/02',
                  component: './Layout/Layout/Index02',
                },
                {
                  path: '/layout/layout/03',
                  component: './Layout/Layout/Index03',
                },
                {
                  path: '/layout/layout/04',
                  component: './Layout/Layout/Index04',
                },
                {
                  path: '/layout/layout/05',
                  component: './Layout/Layout/Index05',
                },
                {
                  path: '/layout/layout/06',
                  component: './Layout/Layout/Index06',
                },
                {
                  path: '/layout/layout/07',
                  component: './Layout/Layout/Index07',
                },
                {
                  path: '/layout/layout/08',
                  component: './Layout/Layout/Index08',
                },
                {
                  path: '/layout/layout/09',
                  component: './Layout/Layout/Index09',
                },
              ]
            },
          ]
        },

        {
          path: 'navigation',
          name: 'navigation',
          icon: 'navigation',
          routes:[
            {
              path: '/navigation/affix',
              name: 'affix',
              icon: 'affix',
              component: './Navigation/Affix',
              routes:[
                {
                  path: '/navigation/affix',
                  redirect: '/navigation/affix/01',
                },
                {
                  path: '/navigation/affix/01',
                  component: './Navigation/Affix/Index01',
                },
                {
                  path: '/navigation/affix/02',
                  component: './Navigation/Affix/Index02',
                },
                {
                  path: '/navigation/affix/03',
                  component: './Navigation/Affix/Index03',
                },
              ]
            },
            {
              path: '/navigation/breadcrumb',
              name: 'breadcrumb',
              icon: 'breadcrumb',
              component: './Navigation/Breadcrumb',
              routes:[
                {
                  path: '/navigation/breadcrumb',
                  redirect: '/navigation/breadcrumb/01',
                },
                {
                  path: '/navigation/breadcrumb/01',
                  component: './Navigation/Breadcrumb/Index01',
                },
                {
                  path: '/navigation/breadcrumb/02',
                  component: './Navigation/Breadcrumb/Index02',
                },
                {
                  path: '/navigation/breadcrumb/03',
                  component: './Navigation/Breadcrumb/Index03',
                },
                {
                  path: '/navigation/breadcrumb/04',
                  component: './Navigation/Breadcrumb/Index04',
                },
                {
                  path: '/navigation/breadcrumb/05',
                  component: './Navigation/Breadcrumb/Index05',
                },
                {
                  path: '/navigation/breadcrumb/06',
                  component: './Navigation/Breadcrumb/Index06',
                },
              ]
            },
            {
              path: '/navigation/dropdown',
              name: 'dropdown',
              icon: 'dropdown',
              component: './Navigation/Dropdown',
              routes:[
                {
                  path: '/navigation/dropdown',
                  redirect: '/navigation/dropdown/01',
                },
                {
                  path: '/navigation/dropdown/01',
                  component: './Navigation/Dropdown/Index01',
                },
                {
                  path: '/navigation/dropdown/02',
                  component: './Navigation/Dropdown/Index02',
                },
                {
                  path: '/navigation/dropdown/03',
                  component: './Navigation/Dropdown/Index03',
                },
                {
                  path: '/navigation/dropdown/04',
                  component: './Navigation/Dropdown/Index04',
                },
                {
                  path: '/navigation/dropdown/05',
                  component: './Navigation/Dropdown/Index05',
                },
                {
                  path: '/navigation/dropdown/06',
                  component: './Navigation/Dropdown/Index06',
                },
                {
                  path: '/navigation/dropdown/07',
                  component: './Navigation/Dropdown/Index07',
                },
                {
                  path: '/navigation/dropdown/08',
                  component: './Navigation/Dropdown/Index08',
                },
                {
                  path: '/navigation/dropdown/09',
                  component: './Navigation/Dropdown/Index09',
                },
              ]
            },
            {
              path: '/navigation/menu',
              name: 'menu',
              icon: 'menu',
              component: './Navigation/Menu',
              routes:[
                {
                  path: '/navigation/menu',
                  redirect: '/navigation/menu/01',
                },
                {
                  path: '/navigation/menu/01',
                  component: './Navigation/Menu/Index01',
                },
                {
                  path: '/navigation/menu/02',
                  component: './Navigation/Menu/Index02',
                },
                {
                  path: '/navigation/menu/03',
                  component: './Navigation/Menu/Index03',
                },
                {
                  path: '/navigation/menu/04',
                  component: './Navigation/Menu/Index04',
                },
                {
                  path: '/navigation/menu/05',
                  component: './Navigation/Menu/Index05',
                },
                {
                  path: '/navigation/menu/06',
                  component: './Navigation/Menu/Index06',
                },
                {
                  path: '/navigation/menu/07',
                  component: './Navigation/Menu/Index07',
                },
              ]
            },
          ]
        },




































        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  /*
  proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
  */
} as IConfig;
