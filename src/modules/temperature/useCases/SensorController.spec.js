const request = require('supertest')

const server = require('../../../shared/infra/http/index')

describe('Temperature', () => {
  it('should be able to list temperature by id', async () => {
    const response = await request(server).get(
      `/temperature/2`
    )

    expect(response.status).toBe(200)
  })

  it('should not be able to list temperature if id non exist', async () => {
    const response = await request(server).get(
      `/temperature/non-existing-id`
    )

    expect(response.status).toBe(200)
  })
})
