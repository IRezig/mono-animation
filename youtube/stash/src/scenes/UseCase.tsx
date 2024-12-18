import {
  Circle,
  Code,
  Img,
  lines,
  makeScene2D,
  Rect,
  Txt,
} from '@motion-canvas/2d';
import {all, createRef, waitFor} from '@motion-canvas/core';
import Link, {LinkProps} from '../components/chain/Link';
import thinking from '../images/thinking.png';
import {Colors} from '../styles';

export default makeScene2D(function* (view) {
  const mainBranch = createRef<Txt>();
  const featureBranchTitle = createRef<Txt>();
  const thinkingImg = createRef<Img>();
  const code = createRef<Code>();
  const navigator = createRef<Rect>();

  const lineSize = 100;
  const lineSize2 = 200;
  const circleSize = 80;
  const lineWidth = 10;
  const borderWidth = 10;
  const radius = 40;
  const WIDTH = 800;
  const HEIGHT = 400;
  const C_SIZE = 25;
  const C_Y = -200;
  const C_X = -WIDTH + 430;
  const fileColor = '#13141E';
  const topBarColor = '#49475e';

  view.add(
    <Rect fill={Colors.background} width={view.width} height={view.height} />,
  );
  const p1pos: [number, number] = [-300, 850];
  const p1: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p1pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };
  const p11pos: [number, number] = [
    p1pos[0],
    p1pos[1] - (lineSize2 + circleSize),
  ];
  const p11: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p11pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };
  const p111pos: [number, number] = [
    p11pos[0],
    p11pos[1] - (lineSize2 + circleSize),
  ];
  const p111: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2 - 50],
      ],
    },
  };
  const p1111pos: [number, number] = [
    p111pos[0],
    p111pos[1] - (lineSize2 + 50 + circleSize),
  ];
  const p1111: LinkProps = {
    color: Colors.mainBranch,
    nodePosition: p1111pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.mainBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const pn21pos: [number, number] = [
    p1111pos[0],
    p1111pos[1] - (lineSize2 + circleSize),
  ];
  const pn21: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn21pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };

  const pn22pos: [number, number] = [
    pn21pos[0],
    pn21pos[1] - (lineSize + circleSize),
  ];
  const pn22: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn22pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };
  const pn23pos: [number, number] = [
    pn22pos[0],
    pn22pos[1] - (lineSize + circleSize),
  ];
  const pn23: LinkProps = {
    color: Colors.shinyYellow,
    nodePosition: pn23pos,
    circleSize,
    borderWidth,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.shinyYellow,
      points: [
        [0, 0],
        [0, -lineSize],
      ],
    },
  };

  const p2pos: [number, number] = [
    p11pos[0] + (lineSize2 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 / 2 + circleSize / 2),
  ];
  const p2: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p2pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, lineSize2 / 2],
        [-lineSize2, lineSize2 / 2],
      ],
    },
  };

  const p22pos: [number, number] = [
    p2pos[0],
    p2pos[1] - (lineSize2 + circleSize),
  ];
  const p22: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p22pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  const p3pos: [number, number] = [
    p11pos[0] + (lineSize2 + circleSize / 2 + lineWidth / 2),
    p11pos[1] - (lineSize2 / 2 + circleSize / 2),
  ];
  const p3: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p3pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
    lineDown: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, lineSize2 / 2],
        [-lineSize2, lineSize2 / 2],
      ],
    },
  };

  const p33pos: [number, number] = [
    p2pos[0],
    p2pos[1] - (lineSize2 + circleSize),
  ];
  const p33: LinkProps = {
    color: Colors.featureBranch,
    circleSize,
    borderWidth,
    nodePosition: p33pos,
    lineUp: {
      lineWidth,
      radius,
      color: Colors.featureBranch,
      points: [
        [0, 0],
        [0, -lineSize2],
      ],
    },
  };

  view.add(
    <>
      <Txt
        fill={Colors.white}
        fontSize={40}
        position={[-400, 850]}
        ref={mainBranch}
      />
      ,
      <Txt
        fill={Colors.featureBranch}
        fontSize={50}
        position={[-20, 660]}
        ref={featureBranchTitle}
      />
      ,
      <Img
        opacity={0}
        ref={thinkingImg}
        src={thinking}
        width={200}
        height={200}
        position={[400, -500]}
      />
      <Rect
        ref={navigator}
        width={WIDTH}
        height={HEIGHT}
        fill={fileColor}
        x={-100}
        y={-600}
        radius={10}
      >
        {/* top bar */}
        <Rect
          width={WIDTH}
          height={50}
          fill={topBarColor}
          x={0}
          y={C_Y}
          radius={10}
        />
        <Circle width={C_SIZE} height={C_SIZE} fill="red" x={C_X} y={C_Y} />
        <Circle
          width={C_SIZE}
          height={C_SIZE}
          fill="green"
          x={C_X + 40}
          y={C_Y}
        />
        <Circle
          width={C_SIZE}
          height={C_SIZE}
          fill="yellow"
          x={C_X + 80}
          y={C_Y}
        />
        <Code
          ref={code}
          fontSize={34}
          lineHeight={36}
          x={-100}
          y={-100}
          fontFamily={'JetBrains Mono'}
          code={`






        -> git stash

        -> git checkout -b add/little-change
        
        -> git checkout -b fix/urgent-bug
        
        -> git stash apply
      `}
        />
      </Rect>
    </>,
  );

  const p1refs = Link(view, p1);
  const p11refs = Link(view, p11);
  const p111refs = Link(view, p111);
  const p1111refs = Link(view, p1111);
  const p2refs = Link(view, p2);
  const p22refs = Link(view, p22);

  yield* p1refs.animate();
  yield* p11refs.animate();
  yield* p111refs.animate();
  yield* p2refs.animate();
  yield* p22refs.animate();

  yield* p1111refs.animate();

  yield* all(
    mainBranch().text('main', 2),
    featureBranchTitle().text('fix/urgent-bug', 2),
  );
  yield* thinkingImg().opacity(1, 1);
  yield* waitFor(6);

  yield* code().selection(lines(7), 3);
  yield* code().selection(lines(9), 5);
  yield* code().selection(lines(11), 4);
  yield* code().selection(lines(13), 4);
});
