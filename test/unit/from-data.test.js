/* global describe it */
import {run} from '@syncano/test'

describe('from-data', function () {
  it('simple test', async () => {

    const args = {
    fields: ["name", "age"],
      entry: [
        {
          name: "John",
          age: 20
        }
      ]
    }

    const result = await run('from-data', {args})
    expect(result).toHaveProperty('code', 200)
    expect(result).toHaveProperty('data', '"name","age"\n"John",20')
  })
})
