import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_URL || 'http://localhost:4000/graphql',
  documents: ['src/**/*.graphql'],
  generates: {
    'src/shared/api/gql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: false,
        useTypeImports: true
      }
    }
  }
}

export default config
