import chai from 'chai'
import axios from 'axios'

chai.should()

describe('Ping', () => {
    it('Should respond pong', async () => {
        const response = await axios.get("http://34.82.151.184/api/ping")
        response.data.should.have.property('pong', true)
    })
})