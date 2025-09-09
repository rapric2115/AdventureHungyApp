/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#F9A826'; // Cheerful Yellow
const tintColorDark = '#F9A826'; // Same Yellow for consistency

export const Colors = {
  light: {
    text: '#3D405B', // Dark Slate Gray
    background: '#F4F1DE', // Soft Off-White
    tint: tintColorLight,
    icon: '#8D99AE', // Medium Gray
    tabIconDefault: '#8D99AE',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#E0E0E0', // Light Warm Gray
    background: '#151718', // Deep Dark Blue
    tint: tintColorDark,
    icon: '#A8DADC', // Lighter Gray
    tabIconDefault: '#A8DADC',
    tabIconSelected: tintColorDark,
  },
};
