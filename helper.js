const firstUpperCase = (raw_string) => {
  const string = raw_string.split('')
  string[0] = string[0].toUpperCase()
  return string.join('')
}

const getSign = (title) => {
  const raw_sign = title.split(' ')[1]
  return firstUpperCase(raw_sign)
}

module.exports = {
  getSign,
  firstUpperCase
}