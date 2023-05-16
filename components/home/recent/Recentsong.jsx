import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./recentsong.style";
import { COLORS } from "../../../constants";
import RecentSongCard from "../../common/cards/recent/RecentSongCard";
import useSong from "../../../hook/useSong";

const RecentSong = () => {
  const router = useRouter();
  const { data, isLoading, error } = useSong("/songs");

  const shuffledData = data.sort(() => 0.5 - Math.random());
  const selectedData = shuffledData.slice(0, 10);

  // const handleShowAll = () => {
  //   router.push("/songs"); // Replace "/all-songs" with the desired route path
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>নতুন গান</Text>
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
          selectedData?.map((song) => (
            <RecentSongCard
              song={song}
              key={`nearby-song-${song._id}`}
              handleNavigate={() => router.push(`/details/${song._id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default RecentSong;
