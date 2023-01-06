import * as React from 'react';
import { ResponsiveLine } from '@nivo/line'

const Graph = () => {
  var data = [
    {
      "id": "completedOrder",
      "data": [
        {
          "x": "2023/01/03",
          "y": "174000"
        },
        {
          "x": "helicopter",
          "y": 140
        },
        {
          "x": "boat",
          "y": 292
        },
        {
          "x": "train",
          "y": 249
        },
        {
          "x": "subway",
          "y": 66
        },
        {
          "x": "bus",
          "y": 43
        },
        {
          "x": "car",
          "y": 283
        },
        {
          "x": "moto",
          "y": 155
        },
        {
          "x": "bicycle",
          "y": 89
        },
        {
          "x": "horse",
          "y": 182
        },
        {
          "x": "skateboard",
          "y": 201
        },
        {
          "x": "others",
          "y": 34
        }
      ]
    }
  ]

return (
    <div style={{ width: '520px', height: '200px', margin: '0 auto' }}>
      <ResponsiveLine
          data={data}
          margin={{ top: 5, right: 50, bottom: 10, left: 5 }}
          xScale={{ type: 'point' }}
          yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: true,
              reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={{
            orient: 'left',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0
        }}
          axisBottom={null}
          axisLeft={null}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'category10' }}
          enablePoints={false}
          enableCrosshair={false}
          useMesh={true}
          legends={[]}
      />
    </div>
);
};

export default Graph;