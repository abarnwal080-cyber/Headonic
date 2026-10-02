import React, { useState, useEffect } from 'react';

interface PremiumLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ onComplete, forceShow = false }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Creating Your Experience');
  const [isHide, setIsHide] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const messages = [
      'Creating Your Experience',
      'Preparing Salon Experience',
      'Polishing Your Style',
      'Almost Ready',
    ];

    let value = 0;
    const totalTime = 2700;
    const intervalTime = 25;
    const step = 100 / (totalTime / intervalTime);
    let messageIndex = 0;

    const timer = setInterval(() => {
      value += step;

      if (value >= 100) {
        value = 100;
        clearInterval(timer);
        setProgress(100);
        setStatusText('Welcome to Hedonic');

        setTimeout(() => {
          setIsHide(true);
          setTimeout(() => {
            setIsMounted(false);
            if (onComplete) onComplete();
          }, 800);
        }, 500);
      } else {
        setProgress(Math.floor(value));

        if (value > 25 && messageIndex === 0) {
          messageIndex++;
          setStatusText(messages[1]);
        }
        if (value > 50 && messageIndex === 1) {
          messageIndex++;
          setStatusText(messages[2]);
        }
        if (value > 78 && messageIndex === 2) {
          messageIndex++;
          setStatusText(messages[3]);
        }
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isMounted && !forceShow) return null;

  return (
    <>
      <style>{`
        .custom-loader-wrapper {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 25%, rgba(255,0,128,.20), transparent 30%),
            radial-gradient(circle at 82% 20%, rgba(0,153,255,.20), transparent 30%),
            radial-gradient(circle at 50% 85%, rgba(140,0,255,.24), transparent 35%),
            linear-gradient(135deg,#07050d,#0d0918 45%,#06070f);
          transition: opacity .8s ease, visibility .8s ease;
          font-family: "Poppins", "Segoe UI", Arial, sans-serif;
        }

        .custom-loader-wrapper.hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .custom-loader-wrapper .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: .45;
          pointer-events: none;
        }

        .custom-loader-wrapper .orb1 {
          width: 280px;
          height: 280px;
          background: #ff1680;
          top: -100px;
          left: -80px;
          animation: orbMove1 7s ease-in-out infinite alternate;
        }

        .custom-loader-wrapper .orb2 {
          width: 300px;
          height: 300px;
          background: #512cff;
          right: -110px;
          top: 20%;
          animation: orbMove2 8s ease-in-out infinite alternate;
        }

        .custom-loader-wrapper .orb3 {
          width: 240px;
          height: 240px;
          background: #00c8ff;
          bottom: -100px;
          left: 25%;
          animation: orbMove3 6s ease-in-out infinite alternate;
        }

        @keyframes orbMove1 {
          to { transform: translate(90px, 70px) scale(1.18); }
        }

        @keyframes orbMove2 {
          to { transform: translate(-80px, 70px) scale(1.2); }
        }

        @keyframes orbMove3 {
          to { transform: translate(90px, -70px) scale(1.18); }
        }

        .custom-loader-wrapper .loader-content {
          position: relative;
          z-index: 5;
          width: min(92%, 650px);
          text-align: center;
        }

        .custom-loader-wrapper .icon-stage {
          position: relative;
          width: 190px;
          height: 190px;
          margin: 0 auto 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-loader-wrapper .orbit {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.18);
          animation: spinOrbit 9s linear infinite;
        }

        .custom-loader-wrapper .orbit::before,
        .custom-loader-wrapper .orbit::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          box-shadow: 0 0 18px currentColor;
        }

        .custom-loader-wrapper .orbit::before {
          top: 16px;
          left: 20px;
          color: #ff4ca5;
          background: #ff4ca5;
        }

        .custom-loader-wrapper .orbit::after {
          bottom: 16px;
          right: 20px;
          color: #22d3ff;
          background: #22d3ff;
        }

        .custom-loader-wrapper .orbit2 {
          position: absolute;
          inset: 28px;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,.18);
          animation: spinReverse 12s linear infinite;
        }

        @keyframes spinOrbit {
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          to { transform: rotate(-360deg); }
        }

        .custom-loader-wrapper .center-icon {
          width: 88px;
          height: 88px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(255,255,255,.16), rgba(255,255,255,.04));
          border: 1px solid rgba(255,255,255,.25);
          box-shadow:
            0 0 25px rgba(255,42,151,.20),
            0 0 55px rgba(84,44,255,.18),
            inset 0 0 25px rgba(255,255,255,.05);
          backdrop-filter: blur(14px);
          animation: centerPulse 2.2s ease-in-out infinite;
        }

        .custom-loader-wrapper .center-icon svg {
          width: 44px;
          height: 44px;
          filter: drop-shadow(0 0 8px rgba(255,195,80,.6));
        }

        @keyframes centerPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow:
              0 0 25px rgba(255,42,151,.20),
              0 0 55px rgba(84,44,255,.18);
          }
          50% {
            transform: scale(1.08);
            box-shadow:
              0 0 38px rgba(255,42,151,.35),
              0 0 80px rgba(84,44,255,.30);
          }
        }

        .custom-loader-wrapper .service-icon {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15,15,25,.78);
          border: 1px solid rgba(255,255,255,.15);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,.35);
        }

        .custom-loader-wrapper .service-icon svg {
          width: 24px;
          height: 24px;
          stroke-width: 1.8;
        }

        .custom-loader-wrapper .icon-scissors {
          top: 0;
          left: 24px;
          color: #ff4e9b;
          animation: floatA 3s ease-in-out infinite;
        }

        .custom-loader-wrapper .icon-lipstick {
          top: 23px;
          right: 4px;
          color: #ff6bce;
          animation: floatB 3.4s ease-in-out infinite;
        }

        .custom-loader-wrapper .icon-comb {
          bottom: 4px;
          left: 13px;
          color: #4edcff;
          animation: floatB 3.2s ease-in-out infinite;
        }

        .custom-loader-wrapper .icon-mirror {
          bottom: 17px;
          right: 20px;
          color: #b47cff;
          animation: floatA 3.7s ease-in-out infinite;
        }

        @keyframes floatA {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(5deg); }
        }

        @keyframes floatB {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .custom-loader-wrapper .brand {
          font-size: clamp(32px, 6vw, 54px);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: 4px;
          color: #fff;
          text-transform: uppercase;
          text-shadow: 0 0 20px rgba(255,255,255,.08);
        }

        .custom-loader-wrapper .brand .gold {
          background: linear-gradient(
            90deg,
            #ffd26a,
            #fff0af,
            #dca63e
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .custom-loader-wrapper .subtitle {
          margin-top: 12px;
          font-size: clamp(14px, 2.5vw, 19px);
          letter-spacing: 5px;
          color: #d0c9db;
          text-transform: uppercase;
        }

        .custom-loader-wrapper .tagline {
          margin-top: 13px;
          font-size: 14px;
          color: #9891a5;
          letter-spacing: 2px;
        }

        .custom-loader-wrapper .loading-box {
          width: min(330px, 75%);
          margin: 35px auto 0;
        }

        .custom-loader-wrapper .track {
          height: 4px;
          width: 100%;
          border-radius: 999px;
          overflow: hidden;
          background: rgba(255,255,255,.08);
        }

        .custom-loader-wrapper .progress {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #ff2e93,
            #b046ff,
            #20d8ff,
            #ffd36b
          );
          box-shadow: 0 0 15px rgba(255,44,150,.55);
          transition: width .08s linear;
        }

        .custom-loader-wrapper .loading-info {
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 11px;
          letter-spacing: 2px;
          color: #8e8798;
          text-transform: uppercase;
        }

        .custom-loader-wrapper .percent {
          color: #ffd26a;
          font-size: 12px;
          font-weight: 600;
        }

        .custom-loader-wrapper .location {
          position: absolute;
          z-index: 5;
          bottom: 26px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 12px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #aaa3b3;
        }

        .custom-loader-wrapper .location span {
          color: #ff5aa7;
        }

        @media(max-width: 600px) {
          .custom-loader-wrapper .icon-stage {
            width: 160px;
            height: 160px;
            margin-bottom: 24px;
          }

          .custom-loader-wrapper .center-icon {
            width: 76px;
            height: 76px;
            border-radius: 23px;
          }

          .custom-loader-wrapper .service-icon {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .custom-loader-wrapper .service-icon svg {
            width: 21px;
            height: 21px;
          }

          .custom-loader-wrapper .brand {
            letter-spacing: 2px;
          }

          .custom-loader-wrapper .subtitle {
            letter-spacing: 3px;
          }

          .custom-loader-wrapper .tagline {
            font-size: 12px;
          }

          .custom-loader-wrapper .location {
            font-size: 9px;
            letter-spacing: 2px;
            bottom: 18px;
          }
        }
      `}</style>

      <div className={`custom-loader-wrapper loader ${isHide ? 'hide' : ''}`} id="loader">
        {/* Background Glow */}
        <div className="bg-orb orb1"></div>
        <div className="bg-orb orb2"></div>
        <div className="bg-orb orb3"></div>

        <div className="loader-content">
          {/* ICON AREA */}
          <div className="icon-stage">
            <div className="orbit"></div>
            <div className="orbit2"></div>

            {/* Scissors */}
            <div className="service-icon icon-scissors">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="6" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="6" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 8.5L19 19" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M8 15.5L19 5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </div>

            {/* Lipstick */}
            <div className="service-icon icon-lipstick">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 9h6v10H9z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 9h6l1.5-3H10.5L9 9Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M10.5 6 12 3l1.5 3" stroke="currentColor" strokeWidth="1.8" />
                <path d="M7 19h10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </div>

            {/* Comb */}
            <div className="service-icon icon-comb">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 5v14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M5 6h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                <path
                  d="M7 6v4M10 6v4M13 6v4M16 6v4M19 6v4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            {/* Mirror */}
            <div className="service-icon icon-mirror">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 21h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
                <path d="M12 16.5V21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </div>

            {/* Center */}
            <div className="center-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <defs>
                  <linearGradient
                    id="goldGradient"
                    x1="0"
                    y1="0"
                    x2="48"
                    y2="48"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF1A8" />
                    <stop offset=".5" stopColor="#FFD15C" />
                    <stop offset="1" stopColor="#C98A24" />
                  </linearGradient>
                </defs>

                {/* Elegant HH / salon emblem */}
                <path d="M15 13v22" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M33 13v22" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M15 24h18" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />

                <path d="M20 13v22" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" />
                <path d="M28 13v22" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* BRAND */}
          <div className="brand">
            HEDONIC <span className="gold">UNISEX</span>
          </div>

          <div className="subtitle">Salon &amp; Beauty Studio</div>

          <div className="tagline">Your Style • Your Beauty • Your Confidence</div>

          {/* PROGRESS */}
          <div className="loading-box">
            <div className="track">
              <div
                className="progress"
                id="progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="loading-info">
              <span id="status">{statusText}</span>
              <span className="percent" id="percent">{progress}%</span>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="location">
          <span>●</span> Proudly Serving Maharajganj
        </div>
      </div>
    </>
  );
};
