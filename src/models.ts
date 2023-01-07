export interface ITransaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId: string;
  functionName: string;
}

type Value = 'blockNumber' | 'timeStamp' | 'hash' | 'nonce' | 'blockHash' | 'transactionIndex' | 'from' | 'to' | 'value' | 'gas' | 'gasPrice' | 'isError' | 'txreceipt_status' | 'input' | 'contractAddress' | 'cumulativeGasUsed' |'gasUsed' |'confirmations' | 'methodId'|'functionName';

export interface IColumn {
  Header: string
  accessor: NonNullable<Value>
}

export interface IAppContext {
  transactions: ITransaction[]
  nextPage: () => void
  hasMore: boolean
}
