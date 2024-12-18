import {Node, Rect, Txt, View2D} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';
import {Colors} from '../styles';

export interface StashProps {
  nodePosition: [number, number];
}
export default function (view: View2D, {nodePosition}: StashProps) {
  const nodeRef = createRef<Node>();

  view.add(
    <Node position={nodePosition} ref={nodeRef} opacity={0}>
      <Rect width={400} height={200} fill={'#e6f7f4'} radius={20}>
        <Txt
          fontSize={24}
          fill={Colors.surface}
          x={-110}
          y={-30}
          text={'📃 index.js'}
        />
        <Txt
          fontSize={24}
          fill={Colors.surface}
          x={-80}
          y={10}
          text={'📃 package.json'}
        />
        <Txt
          fontSize={24}
          fill={Colors.surface}
          x={-80}
          y={60}
          text={'📃 README.md'}
        />
      </Rect>
      <Rect y={-90} width={400} height={40} fill={'#6cd2c4'} radius={20}>
        <Txt fontSize={28} fill={Colors.blackLabel} text={'Stash'} />
      </Rect>
    </Node>,
  );
  return {
    fadeIn: function* () {
      yield* nodeRef().opacity(1, 0.5);
    },
    fadeOut: function* () {
      yield* nodeRef().opacity(0, 0.5);
    },
  };
}
