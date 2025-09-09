# Welcome to Adventure Expo app 👋

## 📝 Introduction

Due to limited time, a full Figma design was not created. The focus was on **rapid development**, building a functional and clean app quickly.  

During development, I want to experimented with **TailwindCSS / NativeWind** to streamline styling, although the final implementation used standard React Native styles for simplicity.

Zustand was used to manage state.

To enhance the development process and improve code quality, **AI (ChatGPT GPT-5)** was leveraged for:  

- Debugging errors  
- Suggesting best practices  
- Improving UI structure and performance  


## Get started
1. Clone the Repository
   ```bash
    git clone https://github.com/yourusername/adventure-log-app.git
    cd adventure-log-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
- [APK](https://raphaelrichardsonb.web.app)

## About the design 

## 🎨 Design Overview

The app follows a **minimalist UI** approach:

- **Input field** to add adventures
- **FlatList** to display adventure logs
- **Two additional screens**: summary and map

**Color palette:**

- Orange: `#F9A826`
- Black: `#151718`
- Blue: `#A8DADC`

Themed components (`ThemedView`, `ThemedText`) ensure **consistent light/dark mode support**.

**Performance considerations:**

- For small datasets, `FlatList` is sufficient.
- For larger datasets (hundreds of entries), `FlashList` could be reintroduced.

## 🛠 Development Process & Requirements

**External Requirements:**

- **Expo SDK** – React Native framework for fast development
- **React Native** – UI components, hooks.
- **@shopify/flash-list** *(optional)* – tested for optimized lists but currently replaced by `FlatList`
- **Custom components** – `ThemedView`, `ThemedText`, `IconSymbol`, etc.
- **Zustand** - State management.
- **No external APIs** – all data is stored locally in app state.

---

## 🤖 Use of AI

**ChatGPT (GPT-5)** was used to:

- Debug errors (e.g., "Body is unusable", `tslib` dependency issues, nested VirtualizedList warnings) `Unable to resolve "tslib" from "node_modules\@shopify\flash-list\dist\AnimatedFlashList.js"`
- Suggest best practices for list rendering (`FlatList`, `FlashList`, `ScrollView + map()`)
- Refactor UI code and improve structure

**Prompt history included:**

- "Got an error in my Expo app 'Body is unusable'..."
- "Unable to resolve 'tslib' from '@shopify/flash-list'"
- "VirtualizedLists should never be nested..."

## Reason for Not Sending Apple Build File

- The Apple build file for the application could not be sent due to a misconfiguration on my Mac. I have replaced the Mac with a new one, and it requires proper configuration to generate and send the build. Once the setup is complete, I will be able to provide the Apple build file.
