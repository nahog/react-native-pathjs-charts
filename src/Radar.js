import React, { Component } from "react";
import { Text as ReactText } from "react-native";
import { Svg } from "expo";
import Radar from "paths-js/radar";

import { Options, identity, styleSvg, fontAdapt } from "./util";

function accessKeys(keys) {
  let a = {};
  for (let i in keys) {
    let key = keys[i];
    a[key] = identity(key);
  }
  return a;
}

export default class RadarChart extends Component {
  static defaultProps = {
    options: {
      width: 600,
      height: 600,
      margin: { top: 20, left: 20, right: 20, bottom: 20 },
      r: 300,
      max: 150,
      rings: 3,
      fill: "#2980B9",
      stroke: "#2980B9",
      animate: {
        type: "oneByOne",
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: "Arial",
        fontSize: 14,
        bold: true,
        color: "#34495E"
      }
    }
  };

  render() {
    const noDataMsg = this.props.noDataMessage || "No data available";
    if (this.props.data === undefined)
      return <ReactText>{noDataMsg}</ReactText>;

    const options = new Options(this.props);

    const x = options.chartWidth / 2;
    const y = options.chartHeight / 2;
    const radius = Math.min(x, y);

    const center = this.props.center || [x, y];

    const keys = Object.keys(this.props.data[0]);
    const keys_value = this.props.data[0];
    const chart = Radar({
      center: this.props.center || [x, y],
      r: this.props.options.r || radius,
      data: this.props.data,
      accessor: this.props.accessor || accessKeys(keys),
      max: this.props.options.max,
      rings: this.props.options.rings
    });
    const self = this;
    const colors = styleSvg({}, self.props.options);
    const colorsFill = self.props.options.fill;
    const curves = chart.curves.map(function(c, i) {
      const color = colorsFill instanceof Array ? colorsFill[i] : colorsFill;
      return (
        <Svg.Path
          key={i}
          d={c.polygon.path.print()}
          fill={color}
          fillOpacity={0.6}
        />
      );
    });

    const length = chart.rings.length;
    const rings = chart.rings.map(function(r, i) {
      if (i !== length - 1) {
        return (
          <Svg.Path
            key={"rings" + i}
            d={r.path.print()}
            stroke={colors.stroke}
            strokeOpacity={colors.strokeOpacity}
            fill="none"
          />
        );
      }
    });

    const textStyle = fontAdapt(options.label);

    const labels = chart.rings[length - 1].path.points().map(function(p, i) {
      function onLabelPress() {
        textStyle.onLabelPress(keys[i], keys_value[`${keys[i]}`]);
      }

      return (
        <Svg.G key={"label" + i}>
          <Svg.Line
            x1={p[0]}
            y1={p[1]}
            x2={center[0]}
            y2={center[1]}
            stroke={colors.stroke}
            strokeOpacity={colors.strokeOpacity}
          />
          <Svg.Text
            fontFamily={textStyle.fontFamily}
            fontSize={textStyle.fontSize}
            fontWeight={textStyle.fontWeight}
            fontStyle={textStyle.fontStyle}
            fill={textStyle.fill}
            onPress={onLabelPress}
            textAnchor="middle"
            x={Math.floor(p[0])}
            y={Math.floor(p[1])}
          >
            {keys[i]}
          </Svg.Text>
        </Svg.G>
      );
    });

    return (
      <Svg width={options.width} height={options.height}>
        <Svg.G x={options.margin.left} y={options.margin.top}>
          {labels}
          <Svg.G x={options.margin.left * -1} y={options.margin.top * -1}>
            {rings}
            {curves}
          </Svg.G>
        </Svg.G>
      </Svg>
    );
  }
}
