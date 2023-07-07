import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Category = ({route, navigation}) => {
  const [searchResult, setSearchResult] = useState(null);
  const songData = useSelector(state => state.song.data);
  const {searchTerm} = route.params;

  useEffect(() => {
    if (songData) {
      const filteredSong = songData.filter(
        item => item.category === searchTerm,
      );
      setSearchResult(filteredSong);
    }
  }, [songData, searchTerm]);

  return (
    <View>
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default Category;
