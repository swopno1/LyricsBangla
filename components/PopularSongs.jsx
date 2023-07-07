import {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PopularSongCard from './PopularSongCard';
import {COLORS, FONT, SIZES} from '../layout/theme';

const PopularSongs = ({isDarkMode}) => {
  const popularSong = useSelector(state => state.song.popularSong);
  const navigation = useNavigation();
  const [selectedSong, setSelectedSong] = useState();

  const handleCardPress = item => {
    //   router.push(`/details/${item._id}`);
    setSelectedSong(item._id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(isDarkMode)}>জনপ্রিয় গান</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('songlist', {
              data_type: 'popular-song',
            })
          }>
          <Text style={styles.headerBtn(isDarkMode)}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={popularSong}
          renderItem={({item}) => (
            <PopularSongCard
              isDarkMode={isDarkMode}
              item={item}
              selectedSong={selectedSong}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={item => item._id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headerTitle: isDarkMode => ({
    fontSize: SIZES.large,
    color: isDarkMode ? COLORS.white : COLORS.primary,
  }),
  headerBtn: isDarkMode => ({
    fontSize: SIZES.medium,
    color: isDarkMode ? COLORS.gray2 : COLORS.gray,
  }),
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default PopularSongs;
