import {useState} from 'react'

export function useRealViewportHeight() {
  const [rvh, setRVH] = useState('foo')
  return rvh
}