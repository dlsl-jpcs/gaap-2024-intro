import { Circle, Img, makeScene2D, Rect, SVG, Txt } from '@motion-canvas/2d';
import { all, createRef, delay, easeInBack, easeInCubic, easeInOutCubic, easeInOutQuad, easeOutBack, easeOutElastic, tween, waitFor, waitUntil } from '@motion-canvas/core';

import star from '../assets/Star.svg?raw';
import DIAMOND from '../assets/Diamond.svg?raw';
import SQUARE_CIRCLES from '../assets/SquareCircles.svg?raw';
import CIRCLES from '../assets/Circles.svg?raw';
import STAR_SHARP from '../assets/StarSharp.svg?raw';
import SPIKY_CIRCLE from '../assets/SpikyCircle.svg?raw';
import FOUR_CIRCLES from '../assets/FourCircles.svg?raw';

import { BLACK, GREEN, PINK, YELLOW } from './colors';



export default makeScene2D(function* (view) {
  // Create your animations here

  const textRef = createRef<Txt>();

  const circlesRef = createRef<SVG>();
  const diamondRef = createRef<SVG>();
  const starSharpRef = createRef<SVG>();
  const squareCircles = createRef<SVG>();
  const spikyCircle = createRef<SVG>();

  // second animation
  const starRef = createRef<SVG>();
  const fourCirclesRef = createRef<SVG>();
  const textRef2 = createRef<Txt>();

  // third
  const textRef3 = createRef<Txt>();

  view.add(
    <Rect
      width={view.width}
      height={view.height}
      fill={PINK}
    >



      <SVG ref={circlesRef} svg={getSvgColored(SPIKY_CIRCLE, YELLOW)} />

      <SVG ref={squareCircles} svg={getSvgColored(SQUARE_CIRCLES, GREEN)} scale={1.2} />

      <SVG ref={starSharpRef} svg={getSvgColored(STAR_SHARP, BLACK)} />
      <SVG ref={spikyCircle} svg={getSvgColored(SPIKY_CIRCLE, BLACK)} scale={0.6} />

      {/* for animation 2 */}

      <SVG ref={fourCirclesRef} svg={getSvgColored(FOUR_CIRCLES, GREEN)} scale={0} />

      <SVG ref={starRef} svg={getSvgColored(star, YELLOW)} scale={0} />


      <SVG ref={diamondRef} svg={getSvgColored(DIAMOND, PINK)} />

      <Txt ref={textRef} fontFamily={'Spotify'} text={"JPCS"} fontStyle={"bold"} fontWeight={900} fill={YELLOW} fontSize={140} scale={0} />
      <Txt ref={textRef2} fontFamily={'Spotify'} text={"2024"} fontStyle={"bold"} fontWeight={900} fill={YELLOW} fontSize={120} scale={0} textAlign={"center"} />
      <Txt ref={textRef3} fontFamily={'Spotify'} text={"Unwrapped"} fontStyle={"bold"} fontWeight={900} fill={YELLOW} fontSize={120} scale={0} textAlign={"center"} />

    </Rect>
  )




  yield* all(
    circlesRef().scale(0, 0).to(1.2, 1.5),
    circlesRef().rotation(0, 0, easeInOutCubic).to(90, 1.5),
    //
    diamondRef().scale(1, 0, easeInOutCubic).to(0.5, 1),
    diamondRef().rotation(0, 0.4, easeInOutCubic).to(90, 1),

    //
    starSharpRef().scale(0, 0, easeInOutCubic).to(1.0, 1.5),
    spikyCircle().scale(0, 0, easeInOutCubic).to(0.6, 1.5),
    //
    squareCircles().scale(0, 0, easeInOutCubic).to(1.25, 1.5),
    squareCircles().rotation(0, 0, easeInOutCubic).to(-90, 1.5),


    textRef().scale(0, 0.5).to(1, 0.7),
  )

  yield* waitFor(0.2);


  // second animation

  yield* all(
    circlesRef().rotation(90, 0).to(30, 1),
    squareCircles().scale(1.25, 0).to(0, 1),



    diamondRef().rotation(90, 0).to(0, 1),
    diamondRef().scale(0.5, 0).to(1.3, 1),

    // starRef().rotation(0, 0).to(-30, 1),
    starRef().scale(0, 0.0).to(1.3, 1),

    fourCirclesRef().scale(0, 0).to(1.1, 1),
    fourCirclesRef().rotation(0, 0).to(90, 1),

    // text
    textRef2().scale(0, 0.0).to(1, 0.9),


    textRef().scale(1, 0.3).to(10, 0.9),
    textRef().opacity(1, 0.2).to(0, 0.5),

    spikyCircle().scale(0.6, 0.0).to(3.2, 1)
  )

  yield* waitFor(0.2);


  // third animation
  yield* all(
    fourCirclesRef().rotation(90, 0, easeInOutCubic).to(0, 1),

    diamondRef().scale(1.3, 0, easeInOutCubic).to(0.5, 1),
    diamondRef().rotation(0, 0, easeInOutCubic).to(45, 1),

    starRef().rotation(0, 0, easeInOutCubic).to(90, 1),
    starRef().scale(1.3, 0, easeInOutCubic).to(0, 1),

    textRef2().scale(1, 0).to(10, 0.9),
    textRef2().opacity(1, 0).to(0, 0.5),

    textRef3().scale(0, 0).to(1, 0.9),
    textRef3().opacity(0, 0).to(1, 0.5),
  )

  yield* waitFor(0.2);

  yield* all(
    textRef3().scale(1, 0).to(5, 0.5),
    textRef3().opacity(1, 0).to(0, 0.3),

    fourCirclesRef().rotation(0, 0).to(90, 1),

    diamondRef().scale(0.5, 0).to(4.2, 1),
    diamondRef().rotation(45, 0).to(0, 1),
  )

});

function getSvgColored(svg: string, color: string) {
  return svg.replace("@color", color);
}
