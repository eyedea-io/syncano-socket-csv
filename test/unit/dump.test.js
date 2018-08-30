/* global describe it */
import {run} from '@syncano/test'

describe('simple dump', function () {
  it('simple test', async () => {

    require('@syncano/core').__setMocks({
      data: {
        sampleClass: {
          take: () => ({
            list: jest.fn().mockImplementationOnce(() => {
              return Promise.resolve([
                {name: 'mcj', age: 18},
                {name: 'nik', age: 22},
              ])
            })
          })
        }
      }
    })

    const args = {
      className: 'sampleClass',
    }

    const result = await run('dump', {args})
    expect(result).toHaveProperty('code', 200)
    expect(result).toHaveProperty('data', '"name","age"\n"mcj",18\n"nik",22')
  })
})
