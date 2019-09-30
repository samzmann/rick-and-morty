import React from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

const CharacterCard = ({ character }) => {
  return (
    <View>
      <Image
        source={{ uri: character.image }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{character.name}</Text>
    </View>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
}

export default CharacterCard
