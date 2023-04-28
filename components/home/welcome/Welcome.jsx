import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const songTypes = [
  "আধুনিক বাংলা",
  "দেশাত্মবোধক",
  "বাউল গান",
  "নজরুলগীতি",
  "রবীন্দ্রসঙ্গীত",
  "লালনগীতি",
  "ভক্তিগীতি",
  "ফোক গান",
  "ব্যান্ড ও পপ",
  "সিনেমার গান",
  "পদাবলী-কীর্তন",
  "অসম্পূর্ণ",
  "বিবিধ গান",
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeSongType, setActiveSongType] = useState("Full-time");

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
            onChangeText={(text) => setSearchTerm(text)}
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
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeSongType, item)}
              onPress={() => {
                setActiveSongType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeSongType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
