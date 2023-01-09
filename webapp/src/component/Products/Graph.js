import * as React from 'react';
import { ResponsiveLine } from '@nivo/line'

const Graph = () => {
  var data = [
    {
      "id": "completedOrder",
      "data": [
        {
          "x": "2022/01/03",
          "y": 174000
        },
        {
          "x": "2022/02/03",
          "y": 140
        },
        {
          "x": "2022/03/03",
          "y": 292
        },
        {
          "x": "2022/04/03",
          "y": 249
        },
        {
          "x": "2022/05/03",
          "y": 66
        },
        {
          "x": "2022/06/03",
          "y": 43
        },
        {
          "x": "2022/07/03",
          "y": 283
        },
        {
          "x": "2022/08/03",
          "y": 155
        },
        {
          "x": "2022/09/03",
          "y": 89
        },
        {
          "x": "2022/10/03",
          "y": 182
        },
        {
          "x": "2022/11/03",
          "y": 201
        },
        {
          "x": "2022/12/03",
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