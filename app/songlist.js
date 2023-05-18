import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";

import { ScreenHeaderBtn, RecentSongCard } from "../components";
import { COLORS, icons, SIZES } from "../constants";
import styles from "../styles/search";

const songlist = () => {
  // Will change this route params data
  // Will use state data and filter according to the params category

  const params = useSearchParams();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (params.data) {
      setData(JSON.parse(params.data));
    }
  }, [params]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = data ? data.slice(startIndex, endIndex) : [];

  // Pagination

  const handlePagination = (direction) => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.heart} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <View>
        <FlatList
          data={paginatedItems}
          renderItem={({ item }) => (
            <RecentSongCard
              song={item}
              handleNavigate={() => router.push(`/details/${item._id}`)}
            />
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{
            padding: SIZES.medium,
            rowGap: SIZES.medium,
          }}
          ListHeaderComponent={() => (
            <>
              <View style={styles.loaderContainer}></View>
            </>
          )}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("left")}
              >
                <Image
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.paginationTextBox}>
                <Text style={styles.paginationText}>{currentPage + 1}</Text>
              </View>
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("right")}
              >
                <Image
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default songlist;
