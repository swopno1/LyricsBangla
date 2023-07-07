import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../layout/theme';
import NecessaryLinkCard from './NecessaryLinkCard';
import icons from '../layout/icons';

const data = [
  {_id: 1, title: 'AmirNFT', icon: icons.share, url: 'https://amirnft.com'},
  {_id: 1, title: 'YouTube', icon: icons.share, url: 'https://youtube.com'},
  {_id: 1, title: 'AmirNFT', icon: icons.share, url: 'http://amirnft.com'},
];

const NecessaryLink = ({isDarkMode, isVertical}) => {
  const renderCards = () => {
    return data.map((item, index) => (
      <NecessaryLinkCard
        key={index}
        icon={item.icon}
        title={item.title}
        url={item.url}
      />
    ));
  };
  const flexDirection = isVertical ? 'column' : 'row';
  const numColumns = isVertical ? 3 : 5;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle(isDarkMode)}>দরকারি তথ্য</Text>
      </View>
      <View style={styles.cardContainer(flexDirection)}>{renderCards()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  cardContainer: flexDirection => ({
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection,
  }),
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
});

export default NecessaryLink;
