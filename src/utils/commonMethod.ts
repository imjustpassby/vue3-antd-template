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
