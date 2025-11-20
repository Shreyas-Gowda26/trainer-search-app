import { StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { getTrainings } from '../api/api'

export default function Trainings() {
  const [trainingsdata,setTrainingdata] = useState([])

  const fetchTrainings = async () => {
    try{
      const response = await getTrainings()
      const data = response.data
      setTrainingdata(data)
      console.log(trainingsdata)
}  catch(error){
  console.error(error)
}
finally{

}
}
useEffect(() => {
  fetchTrainings()
}
)


}

const styles = StyleSheet.create({})