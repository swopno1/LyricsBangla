import React from "react";
import { useRouter, useNavigation } from "expo-router";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./recentsong.style";
import { SIZES } from "../../../constants";
import RecentSongCard from "../../common/cards/recent/RecentSongCard";
import { useSelector } from "react-redux";

const RecentSong = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const latestSong = useSelector((state) => state.song.latestSong);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>নতুন গান</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("songlist", {
              data_type: "recent-song",
            })
          }
        >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {latestSong && (
          <FlatList
            data={latestSong}
            renderItem={({ item }) => (
              <RecentSongCard
                song={item}
                key={`recent-song-${item?._id}`}
                handleNavigate={() => router.push(`/details/${item?._id}`)}
              />
            )}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default RecentSong;
