import request from '../../../src/index'

console.log('test get')

request({
  url: 'http://localhost:9999/get?id=45',
  params: {
    foo: 'bar'
  }
})
