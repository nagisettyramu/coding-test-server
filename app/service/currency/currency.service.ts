import DBConfig from '../../db/dbUtil';
import { Queries } from '../../db/Queries';
import * as _ from 'lodash';
import axios from 'axios';
export interface ICurrencyService {
  getLayout(): any;
  getCurrency(base:string,symbols:string) :any;
}

export default class CurrencyServiceImpl implements ICurrencyService {
  private db: DBConfig;

  constructor() {
    this.db = new DBConfig();
  }

  getLayout = async (): Promise<any> => {
    let result;
    try {
      result = await this.db.executeQuery(Queries.COUNTRY_TABLE);
      _.size(result)
      if (_.size(result) > 0) {
        return Promise.resolve(result);
      }
      else {
        return Promise.resolve(result);
      }
      } 
     catch (error) {
      console.log('Error while fetching the layout' + error.message);
    }
  };

  getCurrency = async (base: string, symbols: string): Promise<any> => {
    const params = {
      base: base,
      symbols: symbols
    };
    try {
      const response = await axios.get(process.env.CONVERTER_API,{params});
      return response.data;
    } catch (error) {
      console.log(error);
  }
}
}
