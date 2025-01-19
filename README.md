# GitRo - React Native Expo Project with NativeWind

## Overview
GitRo is a React Native app that allows users to search for GitHub repositories and view detailed information about them. It features the ability to mark repositories as favorites and manage them easily. 

## Tech Stack
- **React Native**: `0.76.6`
- **Expo**: `52.0.25`
- **Navigation**: React Navigation (Bottom Tabs & Stack)
- **State Management**: Redux Toolkit
- **Styling**: NativeWind/TailwindCSS
- **Networking**: Axios


## Installation

1. Clone the repository:
```bash
git clone https://github.com/Nikhil-Nadkar/GitRo---React-Native-Expo-with-NavtiveWind.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

## Project Structure
```
├── .expo
├── assets
├── node_modules
├── redux
│   └── slice
│       ├── StoreFavourite.js
│       └── store.js
├── src
│   ├── Components
│   │   ├── FavouriteCard.jsx
│   │   └── GitrepoCard.jsx
│   └── Screens
│       ├── Favourite.jsx
│       ├── GitDetail.jsx
│       └── Home.jsx
├── App.jsx
├── tailwind.config.js
└── package.json
```

## Features
- Home screen with repository listings
- Detailed view for repositories
- Favorites management system
- Bottom tab navigation
- Responsive styling with NativeWind
- Redux state management for favorites


### Running the App-Development
```bash
# Start Expo development server
npx expo start

# Run on iOS
npx expo run:ios

# Run on Android
npx expo run:android
```

## Styling
This project uses NativeWind (TailwindCSS for React Native) for styling. The configuration can be found in `tailwind.config.js`.

Example usage in components:
```jsx
// In your components
<View className="flex-1 bg-white p-4">
  <Text className="text-lg font-bold">Hello World</Text>
</View>
```

## State Management
Redux is implemented for state management, particularly for handling favorites functionality. The store configuration and slices can be found in the `redux` directory.
