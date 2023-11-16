import * as React from 'react'

export default function App() {
  const [time, setTime] = React.useState(null)

  React.useEffect(() => {
    const newTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(newTime)
    }
  }, [])

  return <p>{time}</p>
}
