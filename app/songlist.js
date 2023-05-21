import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";

import { ScreenHeaderBtn, RecentSongCard } from "../components";
import { COLORS, icons, SIZES } from "../constants";
import styles from "../styles/search";
import { useDispatch, useSelector } from "react-redux";

const songlist = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const [filterData, setFilterData] = useState([]);

  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.song);

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (params.data_type === "popular-song") {
      // This data array will filter with popular song *****
      setFilterData(data);
    } else if (params.data_type === "recent-song") {
      // This data array will filter with popular song *****
      setFilterData(data);
    }
  }, [params, data]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filterData
    ? filterData.slice(startIndex, endIndex)
    : [];

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
          headerTitle:
            params.data_type === "popular-song"
              ? "Popular Song"
              : params.data_type === "recent-song"
              ? "Recent Song"
              : "",
        }}
      />
      <View>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={{ paddingTop: 20 }}
          />
        )}
        {error && <Text>Something went wrong! Error: {error}</Text>}
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
