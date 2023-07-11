import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {fetchSong} from '../redux/songSlice';
import Welcome from '../components/Welcome';
import {COLORS} from '../layout/theme';
import PopularSongs from '../components/PopularSongs';
import RecentSong from '../components/RecentSong';
import NecessaryLink from '../components/NecessaryLink';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVertical, setIsVertical] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.secondary : COLORS.lightWhite,
  };

  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector(state => state.song);

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
  }, [dispatch, data]);

  useEffect(() => {
    const checkOrientation = () => {
      const {width, height} = Dimensions.get('window');
      setIsVertical(height >= width);
    };

    checkOrientation();

    Dimensions.addEventListener('change', checkOrientation);

    return () => {
      Dimensions.removeEventListener('change', checkOrientation);
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Welcome isDarkMode={isDarkMode} navigation={navigation} />
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={COLORS.primary}
              style={{paddingTop: 20}}
            />
          )}
          {error && <Text>Something went wrong! Error : {error}</Text>}

          <PopularSongs isDarkMode={isDarkMode} />
          <RecentSong isDarkMode={isDarkMode} />

          <NecessaryLink
            isDarkMode={isDarkMode}
            data={data}
            isVertical={isVertical}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
