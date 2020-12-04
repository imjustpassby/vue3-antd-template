const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}

/**
 * 检测是否是由 {} 或者 new Object() 创建的对象
 *
 * @param value
 */
export function isObject(value: any) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

/**
 * 检测是否是数组
 *
 * @param value
 */
export function isArray(value: any) {
  // return Object.prototype.toString.call(value) === '[object Array]';
  return Array.isArray(value)
}

/**
 * 检测是否是纯数字
 * NaN 的类型是 number，值是 NaN
 *
 * @param value
 */
export function isNumber(value: any) {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * 检测是否是空值、空数组、空对象
 *
 * @param value
 */
export function isNull(value: any) {
  if (value === null || value === undefined || value === '') {
    return true
  } else if (isArray(value) && value.length === 0) {
    return true
  } else if (isObject(value) && Object.keys(value).length === 0) {
    return true
  }
  return false
}

export function formatTime(time: number, cFormat: string): string {
  if (`${time}`.length === 10) {
    time = Number(time) * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date: Date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }

  interface formatObj {
    y: number
    m: number
    d: number
    h: number
    i: number
    s: number
    a: number
    [propName: string]: any
  }

  const formatInstance: formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatInstance[key]
    if (key === 'a') {
      return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return value || 0
  })
  return time_str
}

export function getDuration(my_time: number) {
  const days = my_time / 1000 / 60 / 60 / 24
  const daysRound = Math.floor(days)
  const hours = my_time / 1000 / 60 / 60 - 24 * daysRound
  const hoursRound = Math.floor(hours)
  const minutes = my_time / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound
  const minutesRound = Math.floor(minutes)
  const seconds =
    my_time / 1000 -
    24 * 60 * 60 * daysRound -
    60 * 60 * hoursRound -
    60 * minutesRound
  const secondsRound = Math.floor(seconds)
  const time =
    hoursRound === 0
      ? `${minutesRound}:${secondsRound}`
      : `${hoursRound}:${minutesRound}:${secondsRound}`
  return time
}
