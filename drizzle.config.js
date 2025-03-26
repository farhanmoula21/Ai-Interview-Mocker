/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_89CxRteEkpVv@ep-delicate-snowflake-a5txajoy-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};