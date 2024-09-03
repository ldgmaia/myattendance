import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Partipant already added')
    }

    setParticipants((state) => [...state, participantName])
    setParticipantName('')
  }

  function removeParticipant(name: string) {
    setParticipants((state) =>
      state.filter((participant) => participant !== name)
    )
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remove', `Remove participanet ${name}?`, [
      {
        text: 'yes',
        onPress: () => removeParticipant(name),
      },
      {
        text: 'no',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>No one is here yet</Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      {/* {participants.map((participant) => (
          
        ))} */}
      {/* </ScrollView> */}
    </View>
  )
}
