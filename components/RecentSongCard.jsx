import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {COLORS, FONT, SHADOWS, SIZES} from '../layout/theme';
import {checkImageURL} from '../utils';

const RecentSongCard = ({song, handleNavigate, isDarkMode}) => {
  return (
    <TouchableOpacity
      style={styles.container(isDarkMode)}
      onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(song?.employer_logo)
              ? song?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.songName} numberOfLines={1}>
          {song?.title}
        </Text>

        <Text style={styles.songType}>{song?.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: isDarkMode => ({
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    marginBottom: 10,
    borderRadius: SIZES.small,
    backgroundColor: isDarkMode ? COLORS.gray2 : COLORS.white,
    ...SHADOWS.medium,
    shadowColor: isDarkMode ? COLORS.gray2 : COLORS.white,
  }),
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logImage: {
    width: '70%',
    height: '70%',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  songName: {
    fontSize: SIZES.medium,
    // fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  songType: {
    fontSize: SIZES.small + 2,
    // fontFamily: FONT.regular,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});

export default RecentSongCard;
