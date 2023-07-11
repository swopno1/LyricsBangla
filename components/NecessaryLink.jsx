import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../layout/theme';
import NecessaryLinkCard from './NecessaryLinkCard';
import icons from '../layout/icons';

const data = [
  {_id: 1, title: 'AmirNFT', icon: icons.amirNft, url: 'https://amirnft.com'},
  {_id: 2, title: 'YouTube', icon: icons.youTube, url: 'https://youtube.com'},
  {
    _id: 3,
    title: 'MusicBD',
    icon: icons.musicBd,
    url: 'https://www.music.com.bd/',
  },
  {
    _id: 4,
    title: 'Saregama',
    icon: icons.saregama,
    url: 'https://www.saregama.com/',
  },
  {
    _id: 5,
    title: 'Spotify',
    icon: icons.spotify,
    url: 'https://www.spotify.com/',
  },
];

const NecessaryLink = ({isDarkMode, isVertical}) => {
  const numColumns = isVertical ? 3 : 5;
  const itemWidth = `${100 / numColumns}%`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(isDarkMode)}>দরকারি তথ্য</Text>
      </View>
      <View style={styles.cardContainer}>
        {data.map(item => (
          <View
            key={item._id}
            style={{
              width: itemWidth,
              padding: 10,
            }}>
            <NecessaryLinkCard
              icon={item.icon}
              title={item.title}
              url={item.url}
            />
          </View>
        ))}
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
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingBottom: 16,
  },
});

export default NecessaryLink;
