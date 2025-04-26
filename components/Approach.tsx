import React from "react";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Card from "./misc/Card";
import AceternityIcon from "./misc/AceternityIcon";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My Approach to <span className="text-purple">Driving Results</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Business Assessment"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll work together to understand your business processes, identify inefficiencies, and define opportunities where custom software can streamline your operations and drive growth."
        >
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900 rounded-3xl overflow-hidden" />
        </Card>
        <Card
          title="Solution Development"
          icon={<AceternityIcon order="Phase 2" />}
          des="After analyzing your needs, I'll design and develop tailored software solutions, keeping you informed throughout the process with regular progress updates and transparent communication."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            // change bg-black to bg-pink-900
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Deployment"
          icon={<AceternityIcon order="Phase 3" />}
          des="Once development is complete, I'll assist with the smooth integration of the solution into your business workflows and offer ongoing support to adapt and scale as your business evolves."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;
