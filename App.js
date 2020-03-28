import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {clickTimes: 0}
  }

  componentWillMount(){
    console.log('component will mount')
  }

  componentDidMount(){
    console.log('component did mount ')
  }

  shouldComponentUpdate(){
    console.log('component should update')
    return true
  }

  componentWillUpdate(){
    console.log('component will update')
  }

  componentDidUpdate(){
    console.log('component did update')
  }

  timePlus(){
    let clickTimes = this.state.clickTimes;
    clickTimes += 1;
    this.setState({
      clickTimes
    })
  }
 
  render() {
    console.log('render ')
    return (
      <View style={styles.container}>
        <Text onPress={this.timePlus.bind(this)}> textInComponent </Text>
        <Text> 点击次数：{this.state.clickTimes} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
})
