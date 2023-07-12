import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {COLORS, SIZES} from '../layout/theme';

const SongDetails = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [song, setSong] = useState(null);
  const songData = useSelector(state => state.song.data);
  const {songId} = route.params;

  useEffect(() => {
    if (songData) {
      setSong(songData.filter(item => item._id === songId));
    }
  }, [songData, songId]);

  if (!song) {
    return (
      <SafeAreaView style={styles.container(isDarkMode)}>
        <Text>No data found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container(isDarkMode)}>
      <View>
        <Text style={styles.screenTitle(isDarkMode)}>{song[0].title}</Text>
      </View>
      <View>
        <Text>গীতিকার: {song[0].singer}</Text>
        <Text>কম্পোজার: {song[0].composer}</Text>
      </View>

      <View>
        <Text style={styles.sectionTitle(isDarkMode)}>লিরিকস: </Text>
        <Text>{song[0].lyrics}</Text>
      </View>

      {/* <Text>ছবি: {song[0].image_url}</Text> */}

      <View>
        <Text style={styles.sectionTitle(isDarkMode)}>
          এই গান সম্পর্কে অন্যান্ন তথ্য
        </Text>
        <Text>রেটিং: {song[0].rating}</Text>
        <Text>রিলিজ ডেট: {song[0].release_date}</Text>
        <Text>ক্যাটাগরি: {song[0].category}</Text>
        <Text>লেভেল: {song[0].label}</Text>
        <Text>সিনেমার নাম: {song[0].movie_name}</Text>
        <Text>কিওয়ার্ড: {song[0].keyword}</Text>
        {/* <Text>মূলগানের লিঙ্ক: {song[0].source_url}</Text> */}
      </View>
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
    fontWeight: 900,
    color: isDarkMode ? COLORS.white : COLORS.primary,
    marginBottom: 24,
  }),
  sectionTitle: isDarkMode => ({
    fontSize: SIZES.medium,
    fontWeight: 700,
    color: isDarkMode ? COLORS.white : COLORS.primary,
    marginTop: 12,
    marginBottom: 6,
  }),
});
export default SongDetails;
