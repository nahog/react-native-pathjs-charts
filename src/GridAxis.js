import React, { Component } from "react";
import { Svg } from "expo";
import _ from "lodash";
import { AxisStruct } from "./Axis";

export default class GridAxis extends Component {
  render() {
    const { chartArea, options, scale } = this.props;
    const horizontal = options.orient === "top" || options.orient === "bottom";

    const axis = new AxisStruct(scale, options, chartArea, horizontal).axis();

    if (typeof options.gridColor !== "string") {
      options.gridColor = "#3E90F0";
    }

    if (typeof options.opacity !== "number") {
      options.opacity = 0.5;
    }

    const gridLines = options.showLines
      ? _.map(axis.lines, function(c, i) {
          return (
            <Svg.Path
              key={"gridLines" + i}
              d={c.print()}
              strokeOpacity={options.opacity}
              stroke={options.gridColor}
              fill="none"
            />
          );
        })
      : [];

    let offset = {
      x: chartArea.margin.left * -1,
      y: chartArea.margin.top * -1
    };

    let returnV = (
      <Svg.G x={offset.x} y={offset.y}>
        {gridLines}
      </Svg.G>
    );

    return returnV;
  }
}
