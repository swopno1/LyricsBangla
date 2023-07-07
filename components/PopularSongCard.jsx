import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../layout/theme';
import {checkImageURL} from '../utils';

const PopularSongCard = ({item, selectedSong, handleCardPress, isDarkMode}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedSong, isDarkMode, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity
        style={styles.logoContainer(selectedSong, isDarkMode, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.image_url)
              ? item.image_url
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.songName(isDarkMode)} numberOfLines={1}>
        {item.title}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={styles.songName2(selectedSong, isDarkMode, item)}
          numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedSong, item)}>
            {item?.singer} -
          </Text>
          <Text style={styles.location}> {item.composer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (selectedSong, isDarkMode, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor:
      selectedSong === item._id && isDarkMode
        ? COLORS.primary
        : selectedSong === item._id && !isDarkMode
        ? COLORS.gray2
        : isDarkMode
        ? COLORS.gray2
        : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: isDarkMode ? COLORS.primary : COLORS.white,
  }),
  logoContainer: (selectedSong, isDarkMode, item) => ({
    width: 50,
    height: 50,
    backgroundColor:
      selectedSong === item._id && isDarkMode
        ? COLORS.white
        : COLORS.lightWhite,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  songName: isDarkMode => ({
    fontSize: SIZES.medium,
    color: isDarkMode ? COLORS.gray : COLORS.tertiary,
    marginTop: SIZES.small / 1.5,
  }),
  infoContainer: {
    marginTop: SIZES.large,
  },
  songName2: (selectedSong, isDarkMode, item) => ({
    fontSize: SIZES.large,
    color:
      selectedSong === item._id && isDarkMode
        ? COLORS.white
        : selectedSong === item._id && !isDarkMode
        ? COLORS.primary
        : isDarkMode
        ? COLORS.primary
        : COLORS.gray,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedSong, item) => ({
    fontSize: SIZES.medium - 2,
    color: selectedSong === item._id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    color: '#B3AEC6',
  },
});

export default PopularSongCard;
