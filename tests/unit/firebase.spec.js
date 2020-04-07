import { onEpisodeTrackCreated } from '../_mock_/firebase.js' 
const functions = require('firebase-functions');
const mockQueryResponse = jest.fn()
mockQueryResponse.mockResolvedValue([
  {
    id: 1
  }
])

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  firestore: () => ({
   collection: jest.fn(path => ({
     where: jest.fn(queryString => ({
       get: mockQueryResponse
     }))
   })) 
  })
}))

describe('onEpisodeTrackCreated', () => {
  it('successfully invokes function', (done) => {
    const wrapped = test.wrap(functions.onEpisodeTrackCreated);
    const data = { name: 'hello - world', broadcastAt: new Date() }
    await wrapped({
      data: () => ({
        name: 'hello - world'
      }),
      ref:{
        set: jest.fn()
      }
    })
    done();
  })
})
 