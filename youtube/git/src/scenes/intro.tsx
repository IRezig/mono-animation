import {makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {waitFor} from '@motion-canvas/core/lib/flow';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const title = createRef<Txt>();

  view.add(
    <Rect fill={Colors.background} width={view.width} height={view.height} />,
  );

  view.add(
    <Txt
      ref={title}
      strokeFirst
      lineWidth={5}
      lineJoin={'round'}
      position={[20, 0]}
      stroke={Colors.white}
      fill={Colors.PROPERTY}
      fontSize={92}
      fontWeight={500}
      fontFamily={'JetBrains Mono'}
    />,
  );

  yield* title().text('Git Rebase', 1);
  yield* waitFor(2);
});
