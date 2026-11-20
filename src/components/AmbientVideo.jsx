import { useSyncExternalStore } from 'react'

/* Reduced-motion preference, read from the browser with useSyncExternalStore so the
   component re-renders if the user changes the setting while the page is open. */
const motionQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null

function subscribe(callback) {
  motionQuery?.addEventListener('change', callback)
  return () => motionQuery?.removeEventListener('change', callback)
}
const getSnapshot = () => motionQuery?.matches ?? false
const getServerSnapshot = () => true

/* A short muted loop. Shows only the poster when the visitor prefers reduced motion
   or has Data Saver turned on. */
export default function AmbientVideo({ src, poster, className = '', alt = '' }) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData === true

  if (reduceMotion || saveData) {
    return <img className={className} src={poster} alt={alt} width="1400" height="875" />
  }
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      width="1280"
      height="720"
    />
  )
}
