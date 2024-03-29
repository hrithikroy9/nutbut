import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import React from 'react';



function body() {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    
    return (
        <>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <span style={{ fontSize: "30px" }}>Let me show you Something Fat and Thick 😀</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut}>
                        <span style={{ fontSize: "40px" }}>I'ts not my Brinjal 🍆 ✨</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "40px" }}>It's a SUN ⛅️</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <div className="intro" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                        <span style={{ fontSize: "40px" }}>
                            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                            - I'm LaudaMAN -
                            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                        </span>
                    </div>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <span style={{ fontSize: "40px" }}>Done</span>
                        <br />
                        <span className="out" style={{ fontSize: "30px" }}>
                            I am gonna get edited because ಕನ್ನಡ ಮುಖ್ಯ
                        </span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </>
    )
}

export default body;