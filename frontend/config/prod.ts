import type { UserConfigExport } from '@tarojs/cli'

export default {
  defineConstants: {
    API_BASE_URL: '"https://wyp-ai-learn.cn/api/v1"',
  },
  mini: {},
  h5: {},
} satisfies UserConfigExport<'webpack5'>
