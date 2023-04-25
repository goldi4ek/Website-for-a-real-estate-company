import UserStore from '../store/UserStore'

describe('UserStore', () => {
  let userStore

  beforeEach(() => {
    userStore = new UserStore()
  })

  it('should set and get isAuth', () => {
    userStore.setIsAuth(true)
    expect(userStore.isAuth).toBe(true)
  })

  it('should set and get user', () => {
    const user = { name: 'John', email: 'john@example.com' }
    userStore.setUser(user)
    expect(userStore.user).toEqual(user)
  })

  it('should set isAuth to false', () => {
    userStore.setIsAuth(false)
    expect(userStore.isAuth).toBe(false)
  })

  it('should set user to null', () => {
    userStore.setUser(null)
    expect(userStore.user).toBeNull()
  })

  it('should set user to undefined', () => {
    userStore.setUser(undefined)
    expect(userStore.user).toBeUndefined()
  })

  it('should set and get user with address', () => {
    const user = { name: 'John', email: 'john@example.com', address: { street: '123 Main St', city: 'Anytown', state: 'CA' } }
    userStore.setUser(user)
    expect(userStore.user).toEqual(user)
  })

  it('should set and get user with age', () => {
    const user = { name: 'John', email: 'john@example.com', age: 30 }
    userStore.setUser(user)
    expect(userStore.user).toEqual(user)
  })

  it('should set and get user with empty object', () => {
    const user = {}
    userStore.setUser(user)
    expect(userStore.user).toEqual(user)
  })
})