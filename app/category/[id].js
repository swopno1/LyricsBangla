import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";

import { ScreenHeaderBtn, RecentSongCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";
import { useDispatch, useSelector } from "react-redux";
import { fetchSong } from "../../redux/songSlice";

const SongSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState(null);
  const { data, isLoading, error } = useSelector((state) => state.song);

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
    if (data) {
      const filteredSong = data.filter((item) => item.category === params.id);
      setSearchResult(filteredSong);
    }
  }, [data, params.id, dispatch]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = searchResult
    ? searchResult.slice(startIndex, endIndex)
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
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: params.id,
        }}
      />

      {/* <View style={styles.container}>
        <Text style={styles.searchTitle}>{params.id}</Text>
      </View> */}

      {isLoading && <ActivityIndicator size="large" color={COLORS.primary} />}
      {error && <Text>কোন একটা সমস্যা হয়েছে, আবার চেষ্টা করুন!</Text>}
      {paginatedItems.length === 0 && (
        <Text style={{ padding: SIZES.medium }}>কোন গান পাওয়া যায় নি!</Text>
      )}

      <FlatList
        data={paginatedItems}
        renderItem={({ item }) => (
          <RecentSongCard
            song={item}
            handleNavigate={() => router.push(`/details/${item._id}`)}
          />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
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
    </SafeAreaView>
  );
};

export default SongSearch;
