import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: '../nlw-pocket-js-node/swagger.json',
    output: {
      target: './src/http/generated/api.ts',
      client: 'react-query',
      httpClient: 'fetch',
      clean: true,

      override: {
        fetch: {
          includeHttpStatusReturnType: false,
        },

        mutator: {
          path: './src/http/client.ts',
          name: 'http',
        },
      },
    },
  },
})
