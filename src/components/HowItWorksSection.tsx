import React, { useEffect } from 'react';
import { Upload, CheckCircle, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const weightValues = [60, 75, 90, 85];
const heightValues = [183, 183, 183, 186];

const HowItWorksSection = () => {
  useEffect(() => {
    // IDs of the animated paths
    const ids = ['segmentA1', 'segmentA2', 'segmentA3', 'segmentA4', 'segmentA5'];
    let timeouts: NodeJS.Timeout[] = [];
    let running = true;

    function animatePath(path: SVGPathElement, duration: number, delay: number) {
      const length = path.getTotalLength();
      function draw() {
        if (!running) return;
        path.style.transition = 'none';
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        // Force reflow
        void path.getBoundingClientRect();
        path.style.transition = `stroke-dashoffset ${duration}ms linear`;
        path.style.strokeDashoffset = '0';
        // After animation, pause with line visible, then reset and repeat
        const t = setTimeout(() => {
          // Pause with the line fully drawn for 1000ms
          const pause = setTimeout(() => {
            path.style.transition = 'none';
            path.style.strokeDashoffset = `${length}`;
            // Force reflow
            void path.getBoundingClientRect();
            // Restart after short pause
            if (running) {
              timeouts.push(setTimeout(draw, delay));
            }
          }, 1000); // 1000ms pause with line visible
          timeouts.push(pause);
        }, duration);
        timeouts.push(t);
      }
      draw();
    }

    // Animate all paths with a staggered start
    ids.forEach((id, idx) => {
      const el = document.getElementById(id) as unknown as SVGPathElement | null;
      if (el) {
        // Remove any inline dashoffset set by JSX
        el.style.strokeDashoffset = '';
        el.style.strokeDasharray = '';
        // Stagger start by 200ms per path
        const t = setTimeout(() => {
          animatePath(el, 1600, 100);
        }, idx * 200);
        timeouts.push(t);
      }
    });

    return () => {
      running = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const [weightIdx, setWeightIdx] = React.useState(0);

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Header row with title and upload step */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Title - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue leading-tight">
              1 Step Process to Provide 2 Benefits
            </h2>
          </div>

          {/* Upload step - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-brand-teal h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue">Upload Product Images</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Upload images of your products clicked using our marker to our platform
                </p>
                {/* <div className="mt-auto flex justify-center">
                  <Upload size={48} className="text-brand-teal" />
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits cards - 2 columns side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Benefit A Card */}
          <Card className="shadow-md overflow-hidden">
            <div className="relative bg-gray-200 h-64 flex items-center justify-center">
              {/* Inline SVG replaces the image */}
              <svg
                width="auto"
                height="100%"
                viewBox="0 0 481 476"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxHeight: '100%', maxWidth: '100%', display: 'block' }}
              >
                <path d="M376.412 216.893C376.381 204.245 376.396 191.476 376.696 178.708C377.695 136.192 381.981 93.6306 399.335 55.624L399.036 55.3707C394.541 51.652 388.941 49.576 383.46 47.56C358.013 38.212 332.551 28.864 307.104 19.5147C303.311 18.1253 299.517 16.7373 295.724 15.348C295.261 16.6173 294.739 17.8573 294.156 19.0827C290.004 27.892 283.344 35.5093 275.085 40.7053C264.931 47.112 250.908 48.0827 240.604 48.0827H239.932C229.628 48.0827 215.605 47.112 205.449 40.7053C197.207 35.5093 190.531 27.892 186.38 19.0827C185.797 17.8573 185.275 16.6027 184.812 15.3333C181.019 16.7373 177.225 18.1253 173.432 19.5147C147.971 28.864 122.508 38.212 97.0609 47.56C91.5948 49.576 85.9948 51.652 81.5 55.3707L81.201 55.624C98.5541 93.6306 102.841 136.177 103.841 178.693V178.724C104.125 191.492 104.139 204.26 104.109 216.893C103.975 294.221 103.811 371.563 103.676 448.889C103.661 452.415 103.661 455.953 103.661 459.477C149.016 463.927 196.265 463.957 239.903 463.957H240.635C284.271 463.957 331.521 463.927 376.875 459.477C376.875 455.953 376.86 452.415 376.86 448.889C376.711 371.563 376.56 294.221 376.412 216.893Z" fill="white"/>
                <mask id="mask0_1_6339" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="81" y="19" width="319" height="435">
                <path d="M376.412 216.893C376.56 294.221 376.711 371.563 376.86 448.889C331.521 453.34 284.255 453.369 240.635 453.369H239.903C196.281 453.369 149.016 453.34 103.676 448.889C103.811 371.563 103.975 294.221 104.109 216.893C104.139 204.26 104.125 191.492 103.841 178.724V178.693C102.841 136.177 98.5541 93.6307 81.201 55.624L81.5 55.3707C85.9948 51.652 91.5948 49.576 97.0609 47.56C122.508 38.212 147.971 28.864 173.432 19.5147C177.793 32.104 187.604 42.5133 199.327 48.8893C211.737 55.6387 225.924 57.82 240.231 57.82H240.291C254.612 57.82 268.799 55.6387 281.195 48.8893C292.932 42.5133 302.744 32.104 307.104 19.5147C332.551 28.864 358.013 38.212 383.46 47.56C388.941 49.576 394.541 51.652 399.036 55.3707L399.335 55.624C381.981 93.6307 377.695 136.192 376.696 178.708C376.396 191.476 376.381 204.245 376.412 216.893Z" fill="white"/>
                </mask>
                <mask id="mask1_1_6339" maskUnits="userSpaceOnUse" x="81" y="19" width="319" height="435">
                <path d="M376.412 216.893C376.56 294.221 376.711 371.563 376.86 448.889C331.521 453.34 284.255 453.369 240.635 453.369H239.903C196.281 453.369 149.016 453.34 103.676 448.889C103.811 371.563 103.975 294.221 104.109 216.893C104.139 204.26 104.125 191.492 103.841 178.724V178.693C102.841 136.177 98.5541 93.6307 81.201 55.624L81.5 55.3707C85.9948 51.652 91.5948 49.576 97.0609 47.56C122.508 38.212 147.971 28.864 173.432 19.5147C177.793 32.104 187.604 42.5133 199.327 48.8893C211.737 55.6387 225.924 57.82 240.231 57.82H240.291C254.612 57.82 268.799 55.6387 281.195 48.8893C292.932 42.5133 302.744 32.104 307.104 19.5147C332.551 28.864 358.013 38.212 383.46 47.56C388.941 49.576 394.541 51.652 399.036 55.3707L399.335 55.624C381.981 93.6307 377.695 136.192 376.696 178.708C376.396 191.476 376.381 204.245 376.412 216.893Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_1_6339)">
                <path d="M102.24 172.22C112.973 167.92 124.424 165.411 135.971 164.828C136.339 164.811 136.621 164.497 136.603 164.129C136.585 163.761 136.272 163.479 135.904 163.497C124.209 164.087 112.615 166.627 101.744 170.983C101.402 171.119 101.236 171.507 101.373 171.849C101.509 172.191 101.897 172.357 102.24 172.22Z" fill="#DFE1E7"/>
                </g>
                <mask id="mask2_1_6339" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="81" y="19" width="319" height="435">
                <path d="M376.412 216.893C376.56 294.221 376.711 371.563 376.86 448.889C331.521 453.34 284.255 453.369 240.635 453.369H239.903C196.281 453.369 149.016 453.34 103.676 448.889C103.811 371.563 103.975 294.221 104.109 216.893C104.139 204.26 104.125 191.492 103.841 178.724V178.693C102.841 136.177 98.5541 93.6307 81.201 55.624L81.5 55.3707C85.9948 51.652 91.5948 49.576 97.0609 47.56C122.508 38.212 147.971 28.864 173.432 19.5147C177.793 32.104 187.604 42.5133 199.327 48.8893C211.737 55.6387 225.924 57.82 240.231 57.82H240.291C254.612 57.82 268.799 55.6387 281.195 48.8893C292.932 42.5133 302.744 32.104 307.104 19.5147C332.551 28.864 358.013 38.212 383.46 47.56C388.941 49.576 394.541 51.652 399.036 55.3707L399.335 55.624C381.981 93.6307 377.695 136.192 376.696 178.708C376.396 191.476 376.381 204.245 376.412 216.893Z" fill="white"/>
                </mask>
                <g mask="url(#mask2_1_6339)">
                <path d="M120.107 219.153C119.227 240.863 118.787 262.589 118.787 284.316C118.787 301.719 119.069 319.12 119.633 336.513C119.645 336.881 119.953 337.171 120.321 337.159C120.689 337.147 120.979 336.839 120.967 336.471C120.403 319.092 120.12 301.704 120.12 284.316C120.12 262.608 120.56 240.899 121.44 219.208C121.455 218.84 121.168 218.529 120.8 218.515C120.432 218.5 120.123 218.787 120.107 219.153Z" fill="#DFE1E7"/>
                </g>
                <mask id="mask3_1_6339" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="81" y="19" width="319" height="435">
                <path d="M376.412 216.893C376.56 294.221 376.711 371.563 376.86 448.889C331.521 453.34 284.255 453.369 240.635 453.369H239.903C196.281 453.369 149.016 453.34 103.676 448.889C103.811 371.563 103.975 294.221 104.109 216.893C104.139 204.26 104.125 191.492 103.841 178.724V178.693C102.841 136.177 98.5541 93.6307 81.201 55.624L81.5 55.3707C85.9948 51.652 91.5948 49.576 97.0609 47.56C122.508 38.212 147.971 28.864 173.432 19.5147C177.793 32.104 187.604 42.5133 199.327 48.8893C211.737 55.6387 225.924 57.82 240.231 57.82H240.291C254.612 57.82 268.799 55.6387 281.195 48.8893C292.932 42.5133 302.744 32.104 307.104 19.5147C332.551 28.864 358.013 38.212 383.46 47.56C388.941 49.576 394.541 51.652 399.036 55.3707L399.335 55.624C381.981 93.6307 377.695 136.192 376.696 178.708C376.396 191.476 376.381 204.245 376.412 216.893Z" fill="white"/>
                </mask>
                <g mask="url(#mask3_1_6339)">
                <path d="M99.5817 429.703C125.507 430.596 151.433 431.488 177.36 432.38C177.728 432.392 178.036 432.104 178.049 431.736C178.061 431.368 177.773 431.06 177.405 431.047C151.48 430.155 125.553 429.264 99.6281 428.371C99.2599 428.357 98.9511 428.645 98.9385 429.014C98.926 429.381 99.2136 429.691 99.5817 429.703Z" fill="#DFE1E7"/>
                </g>
                <mask id="mask4_1_6339" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="81" y="19" width="319" height="435">
                <path d="M376.412 216.893C376.56 294.221 376.711 371.563 376.86 448.889C331.521 453.34 284.255 453.369 240.635 453.369H239.903C196.281 453.369 149.016 453.34 103.676 448.889C103.811 371.563 103.975 294.221 104.109 216.893C104.139 204.26 104.125 191.492 103.841 178.724V178.693C102.841 136.177 98.5541 93.6307 81.201 55.624L81.5 55.3707C85.9948 51.652 91.5948 49.576 97.0609 47.56C122.508 38.212 147.971 28.864 173.432 19.5147C177.793 32.104 187.604 42.5133 199.327 48.8893C211.737 55.6387 225.924 57.82 240.231 57.82H240.291C254.612 57.82 268.799 55.6387 281.195 48.8893C292.932 42.5133 302.744 32.104 307.104 19.5147C332.551 28.864 358.013 38.212 383.46 47.56C388.941 49.576 394.541 51.652 399.036 55.3707L399.335 55.624C381.981 93.6307 377.695 136.192 376.696 178.708C376.396 191.476 376.381 204.245 376.412 216.893Z" fill="white"/>
                </mask>
                <g mask="url(#mask4_1_6339)">
                <path d="M371.397 54.8573C351.555 44.484 330.163 37.0853 308.152 32.9813C307.791 32.9147 307.443 33.1533 307.375 33.5147C307.307 33.8773 307.545 34.2253 307.908 34.2933C329.788 38.3707 351.056 45.7267 370.779 56.04C371.105 56.2093 371.508 56.084 371.679 55.7573C371.849 55.4306 371.723 55.028 371.397 54.8573Z" fill="#DFE1E7"/>
                </g>
                <mask id="mask5_1_6339" style={{ maskType
