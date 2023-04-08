import React from "react";
import { ScrollView } from "react-native";
import { Layout } from "../../components/Layout";

export const MasonLayout = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </Layout>
  );
};
