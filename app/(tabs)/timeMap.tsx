import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useAdventures } from '@/hooks/useAdventureContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function MapScreen() {
  const { adventures } = useAdventures();
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Adventure Map</ThemedText>
      </ThemedView>
      <View style={styles.timelineContainer}>
        <View style={[styles.line, { backgroundColor: Colors[colorScheme].icon }]} />
        {adventures.map((adventure, index) => (
          <View
            key={adventure.id}
            style={[styles.adventureContainer, index % 2 === 0 ? styles.left : styles.right]}>
            <View style={[
                styles.iconContainer, 
                { 
                  borderColor: Colors[colorScheme].icon,
                  backgroundColor: Colors[colorScheme].background 
                }, 
                index % 2 === 0 ? styles.iconContainerLeft : styles.iconContainerRight
              ]}>
                <IconSymbol
                name={adventure.icon as any}
                size={24}
                color={Colors[colorScheme].tint}
                />
            </View>
            <View style={styles.adventureDetails}>
              <ThemedText type="defaultSemiBold">{adventure.title}</ThemedText>
              <ThemedText style={[styles.timestamp, { color: Colors[colorScheme].icon }]}>
                {new Date(adventure.timestamp).toLocaleString()}
              </ThemedText>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  timelineContainer: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: 2,
    marginLeft: -1,
  },
  adventureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    width: '50%',
    position: 'relative',
  },
  left: {
    alignSelf: 'flex-start',
    paddingRight: 20,
    justifyContent: 'flex-end',
  },
  right: {
    alignSelf: 'flex-end',
    paddingLeft: 25,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: -20,
  },
  iconContainerLeft: {
    right: -20,
  },
  iconContainerRight: {
    left: -20,
  },
  adventureDetails: {
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
  },
});