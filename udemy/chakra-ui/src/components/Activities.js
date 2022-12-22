import React from 'react'
import { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)

  // function loadActivities () {
  //   fetch('https://www.boredapi.com/api/activity')
  //   .then(res => res.json())
  //   .then(data => setActivities(data.activity)
  //   )}
const loadActivities = async () => {
  setLoading(true)
  const response = await fetch('https://www.boredapi.com/api/activity')
  const data = await response.json()
  setActivities(data)
  setLoading(false)
}

  useEffect(() => {
    loadActivities()

  }, [])

  if (loading) {
    return (<div>Loading...</div>
 ) }

  return (

    <div>
     <ul>
      {activities.map((activity) => {
        return <li key={activity.key}>{activity.activity}</li>
        })}
          </ul>
      <button onClick={loadActivities}>Load Activities</button>
    </div>
  )
}

export default Activities
