import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "./screenheader.style";
import { FONT, SIZES } from "../../../constants";
import { Link, useRouter } from "expo-router";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const onPressBtn = () => {
    if (handlePress === "toggleMenu") {
      console.log("Toggle menu");
      toggleDrawer();
    } else if (handlePress === "rateMyApp") {
      console.log("Rate My App");
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.btnContainer} onPress={onPressBtn}>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>

      <Modal
        visible={isDrawerOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={closeDrawer}
      >
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              padding: 20,
            }}
          >
            <MenuItem
              Text="Home - হোম"
              Route="/details/645a95d11942d4a74c1f1f03"
            />
            <MenuItem Text="সব জনপ্রিয় গান" Route="/home" />
            <MenuItem Text="সব নতুন গান" Route="/home" />
            <MenuItem Text="আমাদের সম্পর্কে" Route="/home" />
            <MenuItem Text="Contact Us" Route="/home" />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const MenuItem = ({ Text, Route }) => {
  return (
    <Link href={Route} style={{ fontSize: SIZES.large, fontFamily: FONT.bold }}>
      {Text}
    </Link>
  );
};

export default ScreenHeaderBtn;
