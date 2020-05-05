export default class Session {
  static userInfo = {}
  static key = 'userInfo'
  static cache = window.localStorage

  static save = info => {
    Session.cache.setItem(Session.key, info)
  }

  static get = () => {
    return Session.cache.getItem(Session.key)
  }

  static logined = () => {
    return Session.get()
  }
  
  static remove = () => {
    return Session.cache.removeItem(Session.key)
  }

}