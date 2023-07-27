import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { GamesScreen } from './src/screens/GamesScreen';

export default function App() {
  return (
    <>
    <GamesScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}