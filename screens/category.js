import {View, Text} from 'react-native';
import React from 'react';

const Category = ({route, navigation}) => {
  const {searchTerm} = route.params;

  console.log(searchTerm);
  return (
    <View>
      <Text>category</Text>
    </View>
  );
};

export default Category;
