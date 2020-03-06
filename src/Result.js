import React, { Component } from 'react';
import { 
     View, 
     ScrollView, 
     FlatList, 
     Linking } from 'react-native';
import { ListItem } from 'react-native-elements';


class Result extends Component {
  openLink = () => {
    const username = this.props.user;
    username ? Linking.openURL(`https://github.com/${username}`) : <View />;
  }

  render() {
    
    return (
      <ScrollView>
      
        <FlatList 
          data={this.props.isi}
          renderItem={({ item }) => (
            <ListItem
              onPress={this.openLink}
              leftAvatar={{ source: { uri: item.avatar_url } }}
              title={item.login} 
              //subtitle={item.email}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          //ItemSeparatorComponent={this.renderSeparator} ListHeaderComponent={this.renderHeader}
          />
          
      </ScrollView>
    );
  }
}
  



export default Result;