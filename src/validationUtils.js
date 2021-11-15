export function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
export function validatePhone(phone) {
    const reg = /^[+]?(?:\d{2}-(?:[(]\d{3}[)]|\d{3})-\d{3}-\d{3}|\d{11})$/g
    return reg.test(phone)
}