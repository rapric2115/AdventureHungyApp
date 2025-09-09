import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, StyleSheet } from 'react-native';

export function Avatar() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Image
      alt="Semy Sharp"
      source={{
        uri: '',
      }}
      style={[styles.avatar, { borderColor: Colors[colorScheme].background }]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
  },
});
