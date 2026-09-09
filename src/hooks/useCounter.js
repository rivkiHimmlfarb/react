import { useCallback, useState } from 'react'

/**
 * Hook לדוגמה — מונה פשוט עם חיבור/קיזוז ואיפוס.
 * משמש כתבנית להוקים עתידיים בפרויקט.
 *
 * @param {number} [initialValue=0] ערך התחלתי
 * @returns {[number, { increment: () => void, decrement: () => void, reset: () => void }]}
 */
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => setCount((c) => c + 1), [])
  const decrement = useCallback(() => setCount((c) => c - 1), [])
  const reset = useCallback(() => setCount(initialValue), [initialValue])

  return [count, { increment, decrement, reset }]
}
