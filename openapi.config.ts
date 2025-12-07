import { GeneratorConfig } from 'ng-openapi';

const config: GeneratorConfig = {
  input: 'http://localhost:8080/v3/api-docs',
  output: './src/api',
  options: {
    dateType: 'Date',
    enumStyle: 'enum',
    generateEnumBasedOnDescription: true,
    generateServices: true,
    customHeaders: {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json'
    },
    responseTypeMapping: {
      'application/pdf': 'blob',
      'application/zip': 'blob',
      'text/csv': 'text'
    },
    customizeMethodName: (operationId) => {
      const parts = operationId.split('_');
      return parts[parts.length - 1] || operationId;
    }
  }
};

export default config;
