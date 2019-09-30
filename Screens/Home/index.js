import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, FlatList, View } from 'react-native'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const characterEndpoint = 'https://rickandmortyapi.com/api/character/'

const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('fetching data')
        const { data } = await axios.get(characterEndpoint)
        console.log(data)
        setCharacters(data.results)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const keyExtractor = item => `character-${item.id}`

  return (
    <SafeAreaView>
      <Text>Welcome Home!</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={characters}
        extraData={characters}
        renderItem={({ item }) => <CharacterCard character={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
      />
    </SafeAreaView>
  )
}

export default Home
