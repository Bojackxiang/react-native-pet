import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class AppSon extends Component {
  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  render() {
    return <Text>hello</Text>;
  }
}

const styles = StyleSheet.create({});
