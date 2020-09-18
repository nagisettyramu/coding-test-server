import { Request, Response } from 'express';
import CurrencyServiceImpl, { ICurrencyService } from '../../service/currency/currency.service';

export default class CurrencyController {
  private layoutService: ICurrencyService;

  constructor() {
    this.layoutService = new CurrencyServiceImpl();
  }

  getLayout = async (req: Request, res: Response) => {
    const response = await this.layoutService.getLayout();
    return res.send(response);
  };
  getCurrencyRates = async(req: Request,res: Response) => {
    const response = await this.layoutService.getCurrency(req.query.base, req.query.symbols);
    return res.send(response);
  }
}
