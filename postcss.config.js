import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export default {
  plugins: [
    postcssImport,
    postcssPresetEnv({
      stage: 3,
      autoprefixer: {},
      features: {
        'custom-properties': true
      }
    }),
    ...(IS_PRODUCTION ? [cssnano()] : [])
  ]
}
