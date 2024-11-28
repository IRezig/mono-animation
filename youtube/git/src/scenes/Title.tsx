import {Circle, Line, makeScene2D, Rect} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  const circ = createRef<Circle>();
  const link = createRef<Line>();
  const circ2 = createRef<Circle>();
  const link2 = createRef<Line>();

  view.add(
    <>
      <>
        <Circle
          ref={circ}
          size={80}
          stroke={'lightseagreen'}
          lineWidth={8}
          startAngle={-90}
          endAngle={90}
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
      <>
        <Circle
          ref={circ2}
          size={80}
          stroke={'lightseagreen'}
          lineWidth={8}
          startAngle={-90}
          endAngle={90}
          position={[-330, 270]}
        />
        <Line
          ref={link2}
          position={[-30, 30]}
          stroke={'lightseagreen'}
          lineWidth={8}
          lineDashOffset={() => 20}
          end={0}
          points={[
            [-300, 200],
            [-300, 100],
          ]}
        />
      </>
    </>,
  );

  yield* circ().startAngle(-270, 0.5);
  yield* link().end(2, 0.6);
  yield* circ2().startAngle(-270, 0.5);
  yield* link2().end(2, 0.6);
});
