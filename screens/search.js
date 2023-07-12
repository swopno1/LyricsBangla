import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import RecentSongCard from '../components/RecentSongCard';
import {COLORS, SIZES} from '../layout/theme';

const Search = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [searchResult, setSearchResult] = useState(null);
  const songData = useSelector(state => state.song.data);
  const {searchTerm, category} = route.params;

  useEffect(() => {
    if (songData) {
      searchTerm
        ? setSearchResult(songData.filter(item => item.category === searchTerm))
        : setSearchResult(songData.filter(item => item.category === category));
    }
  }, [songData, searchTerm, category]);

  return (
    <SafeAreaView style={styles.container(isDarkMode)}>
      <Text style={styles.screenTitle(isDarkMode)}>
        {searchTerm ? searchTerm : category}
      </Text>
      <FlatList
        data={searchResult}
        renderItem={({item}) => (
          <RecentSongCard
            isDarkMode={isDarkMode}
            song={item}
            key={`${item?._id}`}
            // handleNavigate={() => router.push(`/details/${item?._id}`)}
          />
        )}
        keyExtractor={item => item?._id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: isDarkMode => ({
    backgroundColor: isDarkMode ? COLORS.secondary : COLORS.lightWhite,
    paddingHorizontal: 24,
    minHeight: '100%',
  }),
  screenTitle: isDarkMode => ({
    fontSize: SIZES.large,
    color: isDarkMode ? COLORS.white : COLORS.primary,
    marginBottom: 24,
  }),
});

export default Search;
