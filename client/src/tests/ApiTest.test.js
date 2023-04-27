import { $host, $authHost } from '../http/index'

describe('axiosConfig', () => {
  test('$host and $authHost should have the correct baseURL', () => {
    expect($host.defaults.baseURL).toBe('http://localhost:5000/')
    expect($authHost.defaults.baseURL).toBe('http://localhost:5000/')
  })

  test('$authHost should have an authorization header with a Bearer token', () => {
    const token = 'some_token'
    localStorage.setItem('token', token)

    const config = $authHost.interceptors.request.handlers[0].fulfilled({ headers: {} })
    expect(config.headers.authorization).toBe(`Bearer ${token}`)
  })
})

