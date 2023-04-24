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
})
