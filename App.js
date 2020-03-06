import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchableFlatList from './src/GithubSearch';

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <SearchableFlatList />
  </SafeAreaView>
);

export default App;