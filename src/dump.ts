import * as S from '@eyedea/syncano'
import json2csv from 'json2csv'

interface Args {
  className: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    const resp = await data[args.className].take(500).list()
    response(json2csv.parse(resp), 200, 'text/csv')
  }
}

export default ctx => new Endpoint(ctx)
