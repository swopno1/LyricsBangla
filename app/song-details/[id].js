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
  Company,
  SongAbout,
  SongFooter,
  SongTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { useCallback, useState } from "react";
import useSong from "../../hook/useSong";

const tabs = ["About", "Qualification", "Responsibilities"];

const SongDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useSong(`songdata/${params.id}`);

  console.log(data);

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return <SongAbout info={data.job_description ?? "No data provided"} />;
        break;
      case "Qualification":
        return (
          <Specifics
            title="Qualification"
            points={data.job_highlights?.Qualifications ?? ["N?/A"]}
          />
        );
        break;
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data.job_highlights?.Responsibilities ?? ["N?/A"]}
          />
        );
        break;
    }
  };

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
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={data.employer_logo}
                songTitle={data.job_title}
                companyName={data.employer_name}
                location={data.job_country}
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
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results"
          }
        />
      </>
    </SafeAreaView>
  );
};
export default SongDetails;
