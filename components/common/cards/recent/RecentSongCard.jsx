import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./recentsongcard.style";
import { checkImageURL } from "../../../../utils";

const RecentSongCard = ({ song, handleNavigate }) => {
  // console.log(song);
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(song?.employer_logo)
              ? song?.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.songName} numberOfLines={1}>
          {song?.title}
        </Text>

        <Text style={styles.songType}>{song?.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecentSongCard;
