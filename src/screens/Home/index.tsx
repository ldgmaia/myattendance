import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const participants = [
    'Diego',
    'Diego1',
    'Diego2',
    'Diego3',
    'Diego4',
    'Diego5',
    'Diego6',
    'Diego7',
    'Diego8',
    'Diego9',
    'Diego10',
    'Diego11',
    'Diego12',
    'Diego13',
    'Diego14',
  ]

  function handleParticipantAdd() {
    console.log('you clicked add')
  }

  function handleRemoveParticipant() {
    console.log('You clicked to remove')
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
            onRemove={handleRemoveParticipant}
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
