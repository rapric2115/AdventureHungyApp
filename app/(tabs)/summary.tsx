import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { AdventureLog, useAdventures } from '@/hooks/useAdventureContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function SummaryScreen() {
  const { adventures } = useAdventures();
  const colorScheme = useColorScheme() ?? 'light';

  // Calculate adventures this week
  const now = new Date();
  const oneWeekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  const adventuresThisWeek = adventures.filter(
    (adventure) => new Date(adventure.timestamp) > oneWeekAgo
  );

  // Calculate most frequent icon
  const iconCounts: { [key: string]: number } = {};
  let mostFrequentIcon: any = 'sparkles';
  let maxCount = 0;

  if (adventures.length > 0) {
    adventures.forEach((adventure) => {
      iconCounts[adventure.icon] = (iconCounts[adventure.icon] || 0) + 1;
      if (iconCounts[adventure.icon] > maxCount) {
        maxCount = iconCounts[adventure.icon];
        mostFrequentIcon = adventure.icon;
      }
    });
  }

  const renderAdventure = ({ item }: { item: AdventureLog }) => (
    <ThemedView style={[styles.adventureItem, { borderBottomColor: Colors[colorScheme].icon }]}>
      <IconSymbol name={item.icon as any} size={24} color={Colors[colorScheme].tint} />
      <View style={styles.adventureTextContainer}>
        <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        <ThemedText type="default" style={[styles.timestamp, { color: Colors[colorScheme].icon }]}>
          {new Date(item.timestamp).toLocaleString()}
        </ThemedText>
      </View>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Adventure Stats</ThemedText>
      </ThemedView>

      <ThemedView style={styles.statsContainer}>
        <ThemedText type="subtitle">This Week:</ThemedText>
        <ThemedText>{adventuresThisWeek.length} adventures</ThemedText>
      </ThemedView>

      <ThemedView style={styles.statsContainer}>
        <ThemedText type="subtitle">Most Frequent Activity:</ThemedText>
        {adventures.length > 0 ? (
          <View style={styles.mostFrequentContainer}>
            <IconSymbol name={mostFrequentIcon} size={20} color={Colors[colorScheme].text} />
            <ThemedText>
              {' '} 
              {mostFrequentIcon.charAt(0).toUpperCase() + mostFrequentIcon.slice(1)} adventures
              logged {maxCount} times
            </ThemedText>
          </View>
        ) : (
          <ThemedText>No adventures logged yet.</ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">All Adventures</ThemedText>
      </ThemedView>
      <ThemedView style={styles.countContainer}>
        <ThemedText type="subtitle">Total Adventures: {adventures.length}</ThemedText>
      </ThemedView>
      <FlatList
        data={adventures}
        renderItem={renderAdventure}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  titleContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 20,
  },
  statsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  mostFrequentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
