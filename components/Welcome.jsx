import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {COLORS, FONT, SIZES, icons, songTypes} from '../layout/constants';

const Welcome = ({navigation, isDarkMode, handleClick}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSongType, setActiveSongType] = useState('');

  return (
    <View>
      <View style={styles.container(isDarkMode)}>
        <Text style={styles.userName(isDarkMode)}>
          Welcome to Lyrics Bangla
        </Text>
        <Text style={styles.welcomeMessage(isDarkMode)}>
          পছন্দের গানের লিরিকস খুঁজুন
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper(isDarkMode)}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="আপনি কোন গানের কথা খুঁজছেন?"
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => {
            if (searchTerm) {
              navigation.navigate('Search', {
                searchTerm: searchTerm,
              });
            }
          }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={songTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeSongType, isDarkMode, item)}
              onPress={() => {
                setActiveSongType(item.slug);
                setSearchTerm(item.slug);
                navigation.navigate('Category', {
                  searchTerm: item.slug,
                });
              }}>
              <Text style={styles.tabText(activeSongType, isDarkMode, item)}>
                {item.type}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item._id}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: isDarkMode => ({
    width: '100%',
    paddingHorizontal: 24,
  }),
  userName: isDarkMode => ({
    fontSize: SIZES.large,
    color: isDarkMode ? COLORS.white : COLORS.primary,
  }),
  welcomeMessage: isDarkMode => ({
    fontSize: SIZES.xLarge,
    color: isDarkMode ? COLORS.white : COLORS.primary,
    marginTop: 2,
  }),
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
    paddingHorizontal: 24,
  },
  searchWrapper: isDarkMode => ({
    flex: 1,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
    backgroundColor: isDarkMode ? COLORS.gray : COLORS.white,
  }),
  searchInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium,
  },
  tab: (activeSongType, isDarkMode, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor:
      activeSongType === item && isDarkMode
        ? COLORS.lightWhite
        : activeSongType === item && !isDarkMode
        ? COLORS.secondary
        : COLORS.gray2,
  }),
  tabText: (activeSongType, isDarkMode, item) => ({
    color:
      activeSongType === item && isDarkMode
        ? COLORS.lightWhite
        : activeSongType === item && !isDarkMode
        ? COLORS.primary
        : COLORS.gray2,
  }),
});

export default Welcome;
