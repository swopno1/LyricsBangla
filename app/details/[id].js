import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import {
  Song,
  SongAbout,
  SongFooter,
  SongTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { useCallback, useEffect, useState } from "react";
// import useSong from "../../hook/useSong";
import axios from "axios";

const SongDetails = () => {
  const tabs = ["Lyrics: গানের কথা", "Details: অন্যান্ন তথ্য"];
  const params = useSearchParams();
  const router = useRouter();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://lyrics-api-orpin.vercel.app/songs/${params.id}`
      );

      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  // const { data, isLoading, error, refetch } = useSong(`/songs/${params.id}`);

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Lyrics: গানের কথা":
        return <SongAbout info={data ?? "No data provided"} />;
      case "Details: অন্যান্ন তথ্য":
        return (
          <Specifics title="Details: অন্যান্ন তথ্য" data={data ?? ["N?/A"]} />
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
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong!</Text>
          ) : data.length === 0 ? (
            <Text>No data!</Text>
          ) : (
            <View
              style={{
                padding: SIZES.medium,
                paddingBottom: 100,
                flex: 1,
                justifyContent: "space-between",
              }}
            >
              <Song
                songLogo={data.image_url}
                songTitle={data.title}
                songName={data.composer}
                location={data.movie_name}
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
          url={data?.source_url ?? "https://careers.google.com/jobs/results"}
        />
      </>
    </SafeAreaView>
  );
};
export default SongDetails;
