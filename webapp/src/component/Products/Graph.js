import * as React from 'react';
import { ResponsiveLine } from '@nivo/line'

const Graph = () => {
  var data2 = [
    {
      "id": "japan",
      "color": "hsl(87, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 153
        },
        {
          "x": "helicopter",
          "y": 277
        },
        {
          "x": "boat",
          "y": 123
        },
        {
          "x": "train",
          "y": 123
        },
        {
          "x": "subway",
          "y": 191
        },
        {
          "x": "bus",
          "y": 48
        },
        {
          "x": "car",
          "y": 175
        },
        {
          "x": "moto",
          "y": 244
        },
        {
          "x": "bicycle",
          "y": 289
        },
        {
          "x": "horse",
          "y": 92
        },
        {
          "x": "skateboard",
          "y": 32
        },
        {
          "x": "others",
          "y": 69
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(128, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 136
        },
        {
          "x": "helicopter",
          "y": 240
        },
        {
          "x": "boat",
          "y": 35
        },
        {
          "x": "train",
          "y": 186
        },
        {
          "x": "subway",
          "y": 149
        },
        {
          "x": "bus",
          "y": 64
        },
        {
          "x": "car",
          "y": 264
        },
        {
          "x": "moto",
          "y": 124
        },
        {
          "x": "bicycle",
          "y": 256
        },
        {
          "x": "horse",
          "y": 51
        },
        {
          "x": "skateboard",
          "y": 160
        },
        {
          "x": "others",
          "y": 78
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(337, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 231
        },
        {
          "x": "helicopter",
          "y": 115
        },
        {
          "x": "boat",
          "y": 205
        },
        {
          "x": "train",
          "y": 259
        },
        {
          "x": "subway",
          "y": 127
        },
        {
          "x": "bus",
          "y": 252
        },
        {
          "x": "car",
          "y": 41
        },
        {
          "x": "moto",
          "y": 82
        },
        {
          "x": "bicycle",
          "y": 209
        },
        {
          "x": "horse",
          "y": 34
        },
        {
          "x": "skateboard",
          "y": 243
        },
        {
          "x": "others",
          "y": 84
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(151, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 247
        },
        {
          "x": "helicopter",
          "y": 50
        },
        {
          "x": "boat",
          "y": 190
        },
        {
          "x": "train",
          "y": 164
        },
        {
          "x": "subway",
          "y": 13
        },
        {
          "x": "bus",
          "y": 214
        },
        {
          "x": "car",
          "y": 71
        },
        {
          "x": "moto",
          "y": 101
        },
        {
          "x": "bicycle",
          "y": 221
        },
        {
          "x": "horse",
          "y": 206
        },
        {
          "x": "skateboard",
          "y": 39
        },
        {
          "x": "others",
          "y": 53
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(242, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 250
        },
        {
          "x": "helicopter",
          "y": 270
        },
        {
          "x": "boat",
          "y": 155
        },
        {
          "x": "train",
          "y": 245
        },
        {
          "x": "subway",
          "y": 102
        },
        {
          "x": "bus",
          "y": 287
        },
        {
          "x": "car",
          "y": 4
        },
        {
          "x": "moto",
          "y": 201
        },
        {
          "x": "bicycle",
          "y": 152
        },
        {
          "x": "horse",
          "y": 122
        },
        {
          "x": "skateboard",
          "y": 178
        },
        {
          "x": "others",
          "y": 163
        }
      ]
    }
  ]

return (
    <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
      <ResponsiveLine
          data={data2}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'transportation',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'count',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />
    </div>
);
};

export default Graph;