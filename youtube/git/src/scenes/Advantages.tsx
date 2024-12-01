import {Img, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {createRef} from '@motion-canvas/core';
import {all, waitFor} from '@motion-canvas/core/lib/flow';
import Debugging from '../images/Debugging.png';
import normalization from '../images/normalization.png';
import readability from '../images/readability.png';
import warning from '../images/warning.png';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const t1 = createRef<Txt>();
  const t2 = createRef<Txt>();
  const t3 = createRef<Txt>();
  const t4 = createRef<Txt>();
  const img1 = createRef<Img>();
  const img2 = createRef<Img>();
  const img3 = createRef<Img>();
  const img4 = createRef<Img>();
  view.add(
    <>
      <Rect fill={Colors.background} width={view.width} height={view.height} />
      <Img
        ref={img1}
        src={readability}
        position={[-450, -400]}
        width={100}
        height={100}
        opacity={0}
      />
      <Txt
        ref={t1}
        lineJoin={'round'}
        position={[-180, -400]}
        stroke={Colors.white}
        fill={Colors.white}
        fontSize={52}
        fontFamily={'JetBrains Mono'}
        textAlign={'left'}
      />
      <Img
        ref={img2}
        src={normalization}
        position={[-450, -100]}
        width={100}
        height={100}
        opacity={0}
      />
      <Txt
        ref={t2}
        lineJoin={'round'}
        position={[50, -100]}
        stroke={Colors.white}
        fill={Colors.white}
        fontSize={42}
        fontFamily={'JetBrains Mono'}
        textAlign={'left'}
      />
      <Img
        ref={img3}
        src={Debugging}
        position={[-450, 200]}
        width={100}
        height={100}
        opacity={0}
      />
      <Txt
        ref={t3}
        lineJoin={'round'}
        position={[-100, 200]}
        stroke={Colors.white}
        fill={Colors.white}
        fontSize={52}
        fontFamily={'JetBrains Mono'}
        textAlign={'left'}
      />
      <Img
        ref={img4}
        src={warning}
        position={[-450, 500]}
        width={100}
        height={100}
        opacity={0}
      />
      <Txt
        ref={t4}
        lineJoin={'round'}
        position={[-100, 500]}
        stroke={Colors.white}
        fill={Colors.white}
        fontSize={52}
        fontFamily={'JetBrains Mono'}
        textAlign={'left'}
      />
    </>,
  );
  yield* all(t1().text('Clean History', 1), img1().opacity(1, 1));
  yield* all(
    t2().text('Straightforward & readable Git graph', 1),
    img2().opacity(1, 1),
  );
  yield* all(t3().text('Enhanced Debugging', 1), img3().opacity(1, 1));
  // yield* waitFor(2);
  yield* all(t4().text('Resolve Conflicts', 1), img4().opacity(1, 1));
  yield* img4().scale(1.5, 1);
  yield* img4().scale(0.5, 1);
  yield* img4().scale(1, 1);

  yield* waitFor(3);
});
