module.exports = {
  root: true,
  extends: [
    '@stitch007/eslint-config-ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/self-closing-comp': ['warn'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
