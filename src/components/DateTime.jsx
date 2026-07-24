import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDateTime = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const dayOfMonth = date.getDate()

    let hours = date.getHours()
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const period = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12
    hours = hours ? hours : 12

    return {
      date: `${day} ${month} ${dayOfMonth}`,
      time: `${hours}:${minutes}${period}`
    }
  }

  const { date, time } = formatDateTime(currentDateTime)

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  )
}

export default DateTime
