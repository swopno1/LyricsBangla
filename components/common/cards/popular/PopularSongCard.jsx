import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularsongcard.style";
import { checkImageURL } from "../../../../utils";

const PopularSongCard = ({ item, selectedSong, handleCardPress }) => {
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.container(selectedSong, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedSong, item)}>
        <Image
          source={{
            uri: checkImageURL(item?.image_url)
              ? item.image_url
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.title[0]}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.songName(selectedSong, item)} numberOfLines={1}>
          {item.title[0]}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedSong, item)}>
            {(item?.singer).map((singer) => singer + " ")} -
          </Text>
          <Text style={styles.location}> {item.composer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularSongCard;
