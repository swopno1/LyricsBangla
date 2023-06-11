import {View, Text} from 'react-native';
import React from 'react';

const Search = ({route, navigation}) => {
  const {searchTerm} = route.params;

  console.log(searchTerm);
  return (
    <View>
      <Text>search</Text>
    </View>
  );
};

export default Search;
