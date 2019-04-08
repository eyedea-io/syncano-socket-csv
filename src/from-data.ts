import * as S from '@eyedea/syncano'
import {Parser} from 'json2csv'

interface Args {
  fields: string[],
  entry: Array<any>
}

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {args}: S.Context<Args>
  ) {
    const {fields, entry} = args

    const json2csvParser = new Parser({fields})
    const responseData = entry.length ? json2csvParser.parse(entry) : ''

    return response(responseData, 200, 'text/csv')
  }
}

export default ctx => new Endpoint(ctx)
