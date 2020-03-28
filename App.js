import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import SonOfApp from './SonOfApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clickTimes: 0, isSonUp: false};
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    console.log('component did mount ');
  }

  shouldComponentUpdate() {
    console.log('component should update');
    return true;
  }

  componentWillUpdate() {
    console.log('component will update');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  show() {
    this.setState({
      isSonUp: !this.state.isSonUp,
    });
  }

  resetNum() {
    console.log('reset num');
    this.setState({...this.state, clickTimes: 0});
  }

  addClickTime() {
    this.setState({
      ...this.state,
      clickTimes: this.state.clickTimes + 1,
    });
  }

  render() {
    console.log('render ');
    return (
      <View style={styles.container}>
        <Button onPress={this.show.bind(this)} title="son 出不出现" />
        <Button onPress={this.addClickTime.bind(this)} title="增加" />
        <Button onPress={this.resetNum.bind(this)} title="reset" />
        <Text>{this.state.clickTimes}</Text>
        {this.state.isSonUp ? (
          <SonOfApp
            times={this.state.clickTimes}
            reset={this.resetNum.bind(this)}
          />
        ) : (
          <Text>不显示</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/**
 * 主要的思想就是在伏组件里面定义 value 和 方法，然后传递给子组件
 * 子组件可以获取+调用父组件所获取的value
 */
