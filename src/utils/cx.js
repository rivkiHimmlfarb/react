/**
 * פונקציות עזר כלליות ליישום.
 */

/**
 * מיזוג שמות מחלקות CSS ללא שכפולים.
 * @param {Array<string | false | null | undefined>} classes
 * @returns {string}
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}
