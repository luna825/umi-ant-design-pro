import pageRoutes from './router.config';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-ant-design-pro',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }
  ]
]

export default {
  plugins,
  routes: pageRoutes
}