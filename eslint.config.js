import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] }, // Ignora a pasta 'dist'
  {
    files: ['**/*.{js,jsx}'], // Aplica esta configuração a todos os arquivos .js e .jsx
    languageOptions: {
      ecmaVersion: 2020, // Define a versão do ECMAScript
      globals: globals.browser, // Define os globais do ambiente do navegador
      parserOptions: {
        ecmaVersion: 'latest', // Usa a versão mais recente do ECMAScript
        ecmaFeatures: { jsx: true }, // Habilita JSX
        sourceType: 'module', // Define o tipo de módulo
      },
    },
    settings: {
      react: { version: 'detect' }, // Detecta a versão do React automaticamente
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Adiciona regras recomendadas do ESLint
      ...react.configs.recommended.rules, // Adiciona regras recomendadas do ESLint para React
      ...react.configs['jsx-runtime'].rules, // Adiciona regras recomendadas para o JSX Runtime
      ...reactHooks.configs.recommended.rules, // Adiciona regras recomendadas para hooks do React
      'react/jsx-no-target-blank': 'off', // Desativa a regra sobre o uso de target="_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Permite exportações constantes
      ],
    },
  },
];
