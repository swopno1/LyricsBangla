import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSong, setLatestSong, setPopularSong } from "../redux/songSlice";

import { COLORS, icons, SIZES } from "../constants";
import {
  RecentSong,
  PopularSongs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { data, popularSong, latestSong, isLoading, error } = useSelector(
    (state) => state.song
  );

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
  }, [dispatch, data]);

  // useEffect(() => {
  //   dispatch(setPopularSong(popularSong));
  // }, [dispatch, popularSong]);

  // useEffect(() => {
  //   dispatch(setLatestSong(latestSong));
  // }, [dispatch, latestSong]);

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          {isLoading && (
            <ActivityIndicator
              size="large"
              color={COLORS.primary}
              style={{ paddingTop: 20 }}
            />
          )}
          {error && <Text>Something went wrong! Error: {error}</Text>}
          {popularSong && <PopularSongs />}
          {latestSong && <RecentSong />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
