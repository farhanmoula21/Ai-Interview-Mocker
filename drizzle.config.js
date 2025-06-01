/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://aiMockInterview_owner:npg_iLx9DBOJ1alf@ep-yellow-river-a8zfx4po-pooler.eastus2.azure.neon.tech/aiMockInterview?sslmode=require",
  },
};
