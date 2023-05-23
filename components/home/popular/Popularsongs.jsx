import { useState } from "react";
import { useRouter, useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./popularsongs.style";
import { SIZES } from "../../../constants";
import PopularSongCard from "../../common/cards/popular/PopularSongCard";
import { useSelector } from "react-redux";

const PopularSongs = () => {
  const popularSong = useSelector((state) => state.song.popularSong);

  const router = useRouter();
  const navigation = useNavigation();

  const [selectedSong, setSelectedSong] = useState();

  const handleCardPress = (item) => {
    router.push(`/details/${item._id}`);
    setSelectedSong(item._id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>জনপ্রিয় গান</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("songlist", {
              data_type: "popular-song",
            })
          }
        >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={popularSong}
          renderItem={({ item }) => (
            <PopularSongCard
              item={item}
              selectedSong={selectedSong}
              handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default PopularSongs;
