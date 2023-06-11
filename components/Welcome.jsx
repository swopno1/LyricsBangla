import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {COLORS, FONT, SIZES} from '../layout/theme';
import icons from '../layout/icons';

const songTypes = [
  'আধুনিক বাংলা',
  'দেশাত্মবোধক',
  'বাউল গান',
  'নজরুলগীতি',
  'রবীন্দ্রসঙ্গীত',
  'লালনগীতি',
  'ভক্তিগীতি',
  'ফোক গান',
  'ব্যান্ড ও পপ',
  'সিনেমার গান',
  'পদাবলী-কীর্তন',
  'অসম্পূর্ণ গানের লিরিক',
  'বিবিধ গান',
];

const Welcome = ({searchTerm, setSearchTerm, handleClick, handleClick2}) => {
  const [activeSongType, setActiveSongType] = useState('Full-time');
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome to Lyrics Bangla</Text>
        <Text style={styles.welcomeMessage}>পছন্দের গানের লিরিকস খুঁজুন</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            placeholder="আপনি কোন গানের কথা খুঁজছেন?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
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
              style={styles.tab(activeSongType, item)}
              onPress={() => {
                handleClick2();
                setActiveSongType(item);
                setSearchTerm(item);
              }}>
              <Text style={styles.tabText(activeSongType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
    paddingHorizontal: 24,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
  },
  searchInput: {
    fontFamily: FONT.regular,
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
  tab: (activeSongType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeSongType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeSongType, item) => ({
    fontFamily: FONT.medium,
    color: activeSongType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default Welcome;
