import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema/schema.ts",
  generates: {
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#DataSourceContext",
        mappers: { Flight: "../models/models#FlightModel" },
      },
    },
  },
};

export default config;
