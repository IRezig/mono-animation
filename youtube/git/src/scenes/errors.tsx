import {makeScene2D, Rect} from '@motion-canvas/2d';
import {waitFor, waitUntil} from '@motion-canvas/core/lib/flow';
import {createRef, makeRefs} from '@motion-canvas/core/lib/utils';

import {Pass} from '../components/Pass';

export default makeScene2D(function* (view) {
  const renderer = createRef<Rect>();
  const pass = makeRefs<typeof Pass>();
  const preview = createRef<Rect>();

  view.add(
    <Rect layout fill={'#141414'} height={'100%'} width={'100%'}></Rect>,
  );

  yield view.add(
    <>
      <Rect ref={renderer} layout clip height={0}></Rect>
      <Rect ref={preview} clip></Rect>
    </>,
  );

  yield* waitUntil('show_renderer');
  yield* renderer().height(null, 2);
  const clone = pass.value.clone();
  preview().add(clone);
  preview()
    .absolutePosition(pass.value.absolutePosition())
    .size(pass.value.size())
    .radius(clone.radius())
    .fill(clone.fill());
  clone.position(0).size(pass.value.size());
  yield* waitFor(3);
});
