import * as S from '@eyedea/syncano'
import json2csv from 'json2csv'

interface Args {
  className: string
  objects: number[]
  query: string[]
  fields: string[]
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data, users}: S.Core,
    {args}: S.Context<Args>
  ) {
    let resp

    resp = (args.className === 'user')
      ? users.take(500)
      : data[args.className].take(500)

    if (args.query) {
      resp.where(...args.query)
    }

    if (args.fields) {
      resp.fields(args.fields)
    }

    resp = (args.objects && args.objects.length > 0)
      ? await resp.find(args.objects)
      : await resp.list()

    const responseData = resp.length !== 0 ? json2csv.parse(resp) : ''

    return response(responseData, 200, 'text/csv')
  }
}

export default ctx => new Endpoint(ctx)
