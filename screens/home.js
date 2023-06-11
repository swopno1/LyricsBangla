import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSong} from '../redux/songSlice';
import Welcome from '../components/Welcome';
import {COLORS} from '../layout/theme';
import PopularSongs from '../components/PopularSongs';
import RecentSong from '../components/RecentSong';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const {data, popularSong, latestSong, isLoading, error} = useSelector(
    state => state.song,
  );

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
  }, [dispatch, data]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                navigation.navigate('Search', {
                  searchTerm: searchTerm,
                });
              }
            }}
            handleClick2={() => {
              navigation.navigate('Category', {
                searchTerm: searchTerm,
              });
            }}
          />
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={COLORS.primary}
              style={{paddingTop: 20}}
            />
          )}
          {error && <Text>Something went wrong! Error: {error}</Text>}

          <PopularSongs />
          <RecentSong />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
