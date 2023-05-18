import React from "react";
import { useRouter, useNavigation } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import styles from "./recentsong.style";
import { COLORS, SIZES } from "../../../constants";
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
              data: JSON.stringify(data),
            })
          }
        >
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={latestSong}
          renderItem={({ song }) => (
            <RecentSongCard
              song={song}
              key={`recent-song-${song?._id}`}
              handleNavigate={() => router.push(`/details/${song?._id}`)}
            />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      </View>
    </View>
  );
};

export default RecentSong;
