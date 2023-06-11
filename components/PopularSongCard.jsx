import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONT, SHADOWS, SIZES} from '../layout/theme';
import {checkImageURL} from '../utils';

const PopularSongCard = ({item, selectedSong, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedSong, item)}
      onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedSong, item)}>
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
      <Text style={styles.songName} numberOfLines={1}>
        {item.title}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.songName(selectedSong, item)} numberOfLines={1}>
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
  container: (selectedSong, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedSong === item._id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedSong, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedSong === item._id ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '70%',
    height: '70%',
  },
  songName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  songName: (selectedSong, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedSong === item._id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  publisher: (selectedSong, item) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedSong === item._id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
  },
});

export default PopularSongCard;
