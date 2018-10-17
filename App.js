import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";

import BarChartColumnBasic from "./examples/BarChartColumnBasic";
import StockLineChartBasic from "./examples/StockLineChartBasic";
import SmoothLineChartBasic from "./examples/SmoothLineChartBasic";
import ScatterplotChartBasic from "./examples/ScatterplotChartBasic";
import RadarChartBasic from "./examples/RadarChartBasic";
import TreeChartBasic from "./examples/TreeChartBasic";

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <BarChartColumnBasic />
        <StockLineChartBasic />
        <SmoothLineChartBasic />
        <ScatterplotChartBasic />
        <RadarChartBasic />
        <TreeChartBasic />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingTop: 840
  }
});
