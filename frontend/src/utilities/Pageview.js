import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { setDocument } from '../lib/functions'

export default function Pageview() {
  const { pathname } = useLocation()
  useEffect(() => {
    const obj = {
      event: 'pageview',
      pathname: pathname,
      browserId: localStorage.getItem('browserId'),
      sessionId: sessionStorage.getItem('sessionId'),
      originalLocation: sessionStorage.getItem('originalLocation')
    }
    setDocument('events', false, obj)
  }, [pathname])
  return null
}
