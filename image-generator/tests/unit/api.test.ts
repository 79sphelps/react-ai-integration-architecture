import request from 'supertest'
import app from '../../server/index'

describe('POST /api/generate-image', () => {
  it('fails without prompt', async () => {
    const res = await request(app).post('/api/generate-image').send({})
    expect(res.status).toBe(400)
  })
})