import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { COLORS, SIZES, icons } from "../../constants";
import {
  Song,
  SongAbout,
  SongFooter,
  SongTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { fetchSong } from "../../redux/songSlice";

const SongDetails = () => {
  const tabs = ["Lyrics: গানের কথা", "Details: অন্যান্ন তথ্য"];
  const params = useSearchParams();
  const router = useRouter();

  const [song, setSong] = useState(null);

  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.song);

  useEffect(() => {
    if (!data) {
      dispatch(fetchSong());
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (params.id && data) {
      const filteredSong = data.filter((item) => item._id === params.id);
      setSong(data[0]);
    }
  }, [params.id, data]);

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {
    console.log("Page refreshed");
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Lyrics: গানের কথা":
        return <SongAbout info={song ?? "No data provided"} />;
      case "Details: অন্যান্ন তথ্য":
        return (
          <Specifics title="Details: অন্যান্ন তথ্য" data={song ?? ["N?/A"]} />
        );
    }
  };

  // Render loading state or error message if params.id is not available
  if (!params.id) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading && (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
          {error && <Text>Something went wrong!</Text>}
          {!song && <Text>No data!</Text>}
          {song && (
            <View
              style={{
                padding: SIZES.medium,
                paddingBottom: 100,
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Song
                songLogo={song.image_url}
                songTitle={song.title}
                songName={song.composer}
                location={song.movie_name}
              />

              <SongTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <SongFooter
          url={song?.source_url ?? "https://careers.google.com/jobs/results"}
        />
      </>
    </SafeAreaView>
  );
};
export default SongDetails;
