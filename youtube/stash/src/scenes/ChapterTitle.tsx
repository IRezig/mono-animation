import {makeScene2D, Node, Rect, Txt} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();
  const tip1 = createRef<Txt>();
  const tip2 = createRef<Txt>();
  const tip3 = createRef<Txt>();
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);
  yield view.add(
    <Txt
      ref={title}
      strokeFirst
      lineWidth={10}
      lineJoin={'round'}
      stroke={'#c0a9e0'}
      fill={'#3B1E54'}
      fontSize={82}
      fontWeight={900}
      fontFamily={'Segoe Print'}
    />,
  );
  view.add(
    <Node position={[20, 0]}>
      <Txt ref={tip1} fontSize={60} position={[-200, -150]} fill="white" />
      <Txt ref={tip2} fontSize={60} position={[-160, 0]} fill="white" />
      <Txt ref={tip3} fontSize={60} position={[-100, 150]} fill="white" />
    </Node>,
  );

  yield* title().text('what Git rebase ?', 3);
  yield* title().opacity(0, 2);
});
