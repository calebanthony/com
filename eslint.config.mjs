// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'off',
      'vue/no-undef-components': 'off',
      'vue/no-undef-vars': 'off',
    },
  })
