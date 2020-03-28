import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class SonOfApp extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    console.log('son -- component will mount')
  }

  componentDidMount(){
    console.log('son -- component did mount ')
  }


  componentWillReceiveProps(props){
    console.log('老属性', this.props)
    console.log('新属性', props)
    // 在这里还能够干的事情就是把新的props放到state，子类组件只通过自己的state来获取value
    return true;
  }


  shouldComponentUpdate(){
    console.log('son -- component should update')
    return true
  }


  componentWillUpdate(){
    console.log('son -- component will update')
  }


  componentDidUpdate(){
    console.log('son -- component did update')
  }


  componentWillUnmount(){
    console.log('son -- component will unmounted')
  }


  reset(){
    console.log('reset')
    this.props.reset();
  }


  render() {
    return (
      <View>
        <Text>son of app : {this.props.times}</Text>
        <Button onPress={this.reset.bind(this)} title='reset clicke times'/>

      </View>
    );
  }
}

const styles = StyleSheet.create({});
