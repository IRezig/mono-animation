import {Circle, Line, makeScene2D, Rect} from '@motion-canvas/2d';
import {easeOutCubic} from '@motion-canvas/core';
import {createRef} from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  const circ = createRef<Circle>();
  const link = createRef<Line>();

  view.add(
    <>
      <>
        <Circle
          scale={0}
          ref={circ}
          size={60}
          stroke={'lightseagreen'}
          lineWidth={8}
          position={[-330, 450]}
        />
        <Line
          ref={link}
          position={[-30, 310]}
          stroke={'lightseagreen'}
          lineWidth={8}
          lineDashOffset={() => 20}
          end={0}
          points={[
            [-300, 100],
            [-300, 0],
          ]}
        />
      </>
    </>,
  );

  yield* circ().scale(1.5, 0.5, easeOutCubic);
  yield* link().end(2, 0.6);
});
