import {makeScene2D, Rect} from '@motion-canvas/2d';
import {all} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';

export default makeScene2D(function* (view) {
  view.add(<Rect fill={'#27262f'} width={view.width} height={view.height} />);

  // const objects: LinkProps[] = [
  //   {
  //     color: 'lightseagreen',
  //     nodePosition: [-330, 450],
  //     direction: 'up',
  //     lineSize: 300,
  //   },
  //   {
  //     color: 'lightseagreen',
  //     nodePosition: [-330, 50],
  //     direction: 'up',
  //     lineSize: 300,
  //   },
  //   {
  //     color: 'lightseagreen',
  //     nodePosition: [-330, -350],
  //     direction: 'up',
  //     lineSize: 300,
  //   },
  //   {
  //     color: 'lightseagreen',
  //     nodePosition: [-30, 450],
  //     direction: 'up',
  //     lineSize: 300,
  //   },
  // ];
  const p1: LinkProps = {
    color: 'lightseagreen',
    nodePosition: [-330, 350],
    direction: 'up',
    lineSize: 300,
  };
  const p2: LinkProps = {
    color: 'lightseagreen',
    nodePosition: [-330, -350],
    direction: 'up',
    lineSize: 300,
  };
  const p3: LinkProps = {
    color: 'lightseagreen',
    nodePosition: [330, -350],
    direction: 'up',
    lineSize: 300,
    lineUp: {
      color: 'red',
      size: 300,
    },
  };

  const p1refs = Link(view, p1);
  const p2refs = Link(view, p2);
  const p3refs = Link(view, p3);
  yield* p1refs.animate();
  yield* all(p2refs.animate(0.2), p3refs.animate());
});
