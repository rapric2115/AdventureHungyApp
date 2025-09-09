import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { AdventureLog, useAdventures } from '@/hooks/useAdventureContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const { adventures, addAdventure } = useAdventures();
  const [newAdventureTitle, setNewAdventureTitle] = useState('');

  const handleAddAdventure = () => {
    addAdventure(newAdventureTitle);
    setNewAdventureTitle('');
  };

  const renderAdventure = ({ item }: { item: AdventureLog }) => (
    <ThemedView style={[styles.adventureItem, { borderBottomColor: Colors[colorScheme].icon }]}>
      <IconSymbol name={item.icon as any} size={24} color={Colors[colorScheme].tint} />
      <View style={styles.adventureTextContainer}>
        <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        <ThemedText type="default" style={[styles.timestamp, { color: Colors[colorScheme].icon }]}>
          {item.timestamp.toLocaleString()}
        </ThemedText>
      </View>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: Colors[colorScheme].text, borderColor: Colors[colorScheme].icon }]}
          placeholder="What did you do today?"
          placeholderTextColor={Colors[colorScheme].icon}
          value={newAdventureTitle}
          onChangeText={setNewAdventureTitle}
        />
        <Button title="Add" onPress={handleAddAdventure} color={Colors[colorScheme].tint} />
      </ThemedView>

      <FlatList
        data={adventures}
        renderItem={renderAdventure}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
         ListHeaderComponent={() => (
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Adventures</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    gap: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  adventureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 12,
  },
  adventureTextContainer: {
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
  },
});
