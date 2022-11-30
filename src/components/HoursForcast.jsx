import React from 'react'
import WeatherItem from './WeatherItem'

export default function HoursForcast({data}) {
  return (
    data?.list.map((item)=><WeatherItem item={item} />)
  )
}
