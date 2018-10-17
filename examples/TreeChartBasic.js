import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Tree } from '../src'
//import { Tree } from 'react-native-pathjs-charts-expo';

export default class TreeChartBasic extends Component {
  render() {
    let data = {
      "name": "Root",
      "children": [{
        "name": "Santa Catarina",
        "children": [{
          "name": "Tromp"
        }, {
          "name": "Thompson"
        }, {
          "name": "Ryan"
        }]
      }, {
        "name": "Acre",
        "children": [{
          "name": "Dicki"
        }, {
          "name": "Armstrong"
        }, {
          "name": "Nitzsche"
        }]
      }]
    }

    let options = {
      margin: {
        top: 20,
        left: 50,
        right: 80,
        bottom: 20
      },
      width: 200,
      height: 200,
      fill: "#2980B9",
      stroke: "#3E90F0",
      r: 2,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }

    return (
      <View style={styles.container}>
        <Tree data={data} options={options}  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});