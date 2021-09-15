import { useRef, useEffect } from 'react'

import { setDocument } from './functions'

export function useClickEvent(elRef, callback) {
  const callbackRef = useRef()
  callbackRef.current = callback

  useEffect(() => {
    const handleClickEvent = (e) => {
      if (elRef?.current?.contains(e.target) && callbackRef.current) {
        callbackRef.current(e)

        const obj = {
          event: 'click',
          elementId: elRef.current.id,
          pathname: elRef.current.value,
          browserId: localStorage.getItem('browserId'),
          sessionId: sessionStorage.getItem('sessionId'),
          originalLocation: sessionStorage.getItem('originalLocation')
        }

        setDocument('events', false, obj)
      }
    }

    document.addEventListener('click', handleClickEvent, true)
    return () => {
      document.removeEventListener('click', handleClickEvent, true)
    }
  }, [callbackRef, elRef])
}
