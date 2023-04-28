import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularsongcard.style";
import { checkImageURL } from "../../../../utils";

const PopularSongCard = ({ item, selectedSong, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedSong, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedSong, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.songName(selectedSong, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedSong, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularSongCard;
