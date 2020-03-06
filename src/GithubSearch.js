import React, { Component } from 'react';
import { 
  TextInput,
   View, 
   Text, 
   ActivityIndicator,  
   ScrollView, 
   FlatList, 
   Linking } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "../styles/Home.style";
import Result from './Result';


class GithubSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '', 
      data: [], 
      loading: false };
  }

  fetchData = () => {
    this.setState({ loading: true });
    const username = this.state.user;
    fetch(`https://api.github.com/search/users?q=${username}+in:user&per_page=50`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data, loading: false });
        console.log(data.items)
      })
      .catch(err => console.log(err));
  }
  
  
  renderResult() {
    if (this.state.data.message) {
      return (
        this.state.loading ? <ActivityIndicator /> : 
        <Text style={styles.notFoundStyle}>User not found</Text>
      );
    }
    return (
      this.state.loading ? <ActivityIndicator /> : <Result 
      isi={this.state.data.items}
      user={this.state.user}
      //url={this.state.data.html_url}
    />
  );
   
   
    
  }

  render() {
    
    return (
      <View>
        <View style={styles.backgroundStyle}>
                    <Icon name="search" style={styles.iconStyle} />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputStyle}
                        placeholder="Search"
                        underlineColorAndroid="transparent"
                        value={this.props.user}
                        autoFocus={true}
                        returnKeyType='search'
                        onSubmitEditing={this.fetchData}
                        clearButtonMode="while-editing"
                        //onFocus={() => this.fetchData()}
                        onChangeText={(user) => this.setState({ user })}
                        
                    />
                </View>
                
                {this.renderResult()}
      </View>
    );
  }
}



export default GithubSearch;