import ConnectionUtils from './connectionUtil';

export default class DBConfig {
  private connectionUtils = null;

  constructor() {
    this.connectionUtils = new ConnectionUtils();
  }

  executeQuery = (query: string): any => {
    console.log(query);
    return (async () => {
      const client = await this.connectionUtils.createConnection();
      try {
        const res = await client.query(query);
        return res.rows;
      } finally {
        client.release();
      }
    })().catch((e) => console.error(e.stack));
  };
}
