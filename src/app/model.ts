export type InstrumentDocument = {
  url?: string;
  title: string;
}

export type Instrument = {
  fundName: string;
  fundCompany: string;
  fundType: string;
  currency: string;
  change1m: number;
  change3m: number;
  change1y: number;
  change3y: number;
  isin: string;
  documents: InstrumentDocument[];
}

type Response = {
  status: {
    success: boolean,
    errors: Array<any>,
    infos: Array<any>,
    jSessionId: string
  },
  data: Array<Instrument>
}

export type ServerResponse = Array<Response>;
