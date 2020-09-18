import { Pool } from 'pg';

export default class ConnectionUtil {
  private pool: Pool = null;

  // initialize the connection pool of objects and return the pool
  createConnection = () => {
    console.log(process.env.DATABASE_URL);
    // TODO: implement Singleton design pattern.
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      connectionTimeoutMillis: 3000,
      idleTimeoutMillis: 6000,
      ssl: false
    });
    return this.pool.connect();
  };

  releaseConnection = () => {
    this.pool.end();
  };
}
