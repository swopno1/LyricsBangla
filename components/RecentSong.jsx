import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, FONT, SIZES} from '../layout/theme';
import RecentSongCard from './RecentSongCard';
import {useNavigation} from '@react-navigation/native';

const RecentSong = ({isDarkMode, navigation}) => {
  const latestSong = useSelector(state => state.song.latestSong);

  const handleCardPress = item => {
    navigation.navigate('SongDetails', {
      songId: item._id,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(isDarkMode)}>নতুন গান</Text>
        {/* <TouchableOpacity
          onPress={() =>
            navigation.navigate('songlist', {
              data_type: 'recent-song',
            })
          }>
          <Text style={styles.headerBtn(isDarkMode)}>Show all</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.cardsContainer}>
        {latestSong && (
          <FlatList
            data={latestSong}
            renderItem={({item}) => (
              <RecentSongCard
                isDarkMode={isDarkMode}
                song={item}
                key={`recent-song-${item?._id}`}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={item => item._id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    marginBottom: SIZES.xLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
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
    gap: SIZES.small,
  },
});

export default RecentSong;
