import react, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import SongCard from '../components/SongCard';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [songs, setSongs] = useState([]);

  const searchSongs = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9f8ffc70c02142ec9b53ec437d07fb3e',
        {
          params: {
            category: 'technology',
            q: searchText,
          },
        }
      )
      .then((response) => {
        // handle success
        setSongs(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchSongs}
      />
      <FlatList
        data={songs}
        renderItem={({ item }) => (
          <SongCard
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
