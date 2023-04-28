import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./recentsong.style";
import { COLORS } from "../../../constants";
import NearbySongCard from "../../common/cards/nearby/NearbySongCard";
import useFetch from "../../../hook/useFetch";

const Recentsong = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

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
          data?.map((song) => (
            <NearbySongCard
              song={song}
              key={`nearby-song-${song.job_id}`}
              handleNavigate={() => router.push(`/song-details/${song.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Recentsong;
