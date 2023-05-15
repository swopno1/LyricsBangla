import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularsongs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularSongCard from "../../common/cards/popular/PopularSongCard";
import useSong from "../../../hook/useSong";

const Popularsongs = () => {
  const router = useRouter();
  // *Attention* Will need to add params for filtering popular song
  const { data, isLoading, error } = useSong("/songs");

  const [selectedSong, setSelectedSong] = useState();

  const handleCardPress = (item) => {
    router.push(`/details/${item._id}`);
    setSelectedSong(item._id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>জনপ্রিয় গান</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>কিছু একটা সমস্যা হয়েছে!</Text>
        ) : (
          <FlatList
            data={data}
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
          />
        )}
      </View>
    </View>
  );
};

export default Popularsongs;
