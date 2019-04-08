import * as S from '@eyedea/syncano'
import json2csv from 'json2csv'

interface Args {
  data: object
}

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {args}: S.Context<Args>
  ) {
    const responseData = json2csv.parse(args.data)

    return response(responseData, 200, 'text/csv')
  }
}

export default ctx => new Endpoint(ctx)
