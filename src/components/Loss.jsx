import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState, useEffect, useCallback } from "react";

export default function Loss() {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return init ? (

    <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            pointerEvents: "none", // optional, so it doesn't block clicks
        }}
        options={{
            background: {
            color: "transparent",
            },
            particles: {
            number: { value: 80 },
            color: { value: "#555555" }, // gray ash
            shape: { type: "polygon" },
            opacity: { value: 0.6 },
            size: { value: { min: 2, max: 8 } },
            move: {
                enable: true,
                direction: "bottom",
                outModes: "out",
                speed: 2,
            },
            },
        }}
        />
    ) : null ;
}
