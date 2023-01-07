import { IColumn } from '../models';

export const baseUrl = 'https://api.etherscan.io/api?module=account&action=txlist';
export const apiKey = 'M4SPAA2KMGC9UZMDW393DNGAK27K3AMZYF';

export const PAGE_LIMIT = 15;

export const columns:Array<IColumn> = [
  {
    Header:'Timestamp',
    accessor:'timeStamp'
  },
  {
    Header:'From address',
    accessor:'from'
  },
  {
    Header:'To address',
    accessor:'to'
  },
  {
    Header:'Value',
    accessor:'value'
  },
  {
    Header:'Confirmations',
    accessor:'confirmations'
  },
  {
    Header:'Hash',
    accessor:'hash'
  },
]