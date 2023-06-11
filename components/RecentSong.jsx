import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, FONT, SIZES} from '../layout/theme';
import RecentSongCard from './RecentSongCard';
import {useNavigation} from '@react-navigation/native';

const RecentSong = () => {
  const navigation = useNavigation();
  const latestSong = useSelector(state => state.song.latestSong);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>নতুন গান</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('songlist', {
              data_type: 'recent-song',
            })
          }>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {latestSong && (
          <FlatList
            data={latestSong}
            renderItem={({item}) => (
              <RecentSongCard
                song={item}
                key={`recent-song-${item?._id}`}
                // handleNavigate={() => router.push(`/details/${item?._id}`)}
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default RecentSong;
