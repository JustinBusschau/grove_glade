import React from 'react';
import styled from 'styled-components';
import { typography, color } from '../shared/styles';

const SpinnerCanvas = styled.div`
  display: block;
`;

const ClockContainer = styled.foreignObject`
  display: flex;
`;

const CountdownClock = styled.div`
  display: inline-block;
  text-align: center;
`;

const CountdownClockLabel = styled.div`
  font-family: ${typography.type.brand};
  font-size: 8pt;
`;

const CountdownClockGroup = styled.div`
  padding: 3px;
  display: inline-block;
`;

const CountdownClockGroupNumber = styled.span`
  padding: 10px;
  border-radius: 8px;
  font-family: ${typography.type.brand};
  font-size: 10pt;
  background: ${color.darkest};
  display: inline-block;
`;

const CountdownClockGroupLabel = styled.div`
  font-family: ${typography.type.brand};
  font-size: 5pt;
  padding-top: 5px;
`;

const ClockEventBannerWrapper = styled.foreignObject`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
  font-family: ${typography.type.brand};
  font-size: 8pt;
`;

const ClockEventBannerEventDetail = styled.div`
  min-height: 60px;
  background: ${color.dark};
  width: 70%;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
`;

const ClockEventBannerEventSchedule = styled.div`
  min-height: 60px;
  background: ${color.darkest};
  width: 25%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  font-size: 6pt;
  line-height: 12px;
`;

const ClockEventCallToActionWrapper = styled.foreignObject`
  display: flex;
`;

const ClockEventCallToAction = styled.div`
  background: linear-gradient(
    91.14deg,
    ${color.primary} 0%,
    ${color.primary} 10%,
    ${color.secondary} 90%,
    ${color.secondary} 100%
  );
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  font-size: 6pt;
  line-height: 12px;
`;

export default function CountdownTimer(): JSX.Element {
  return (
    <SpinnerCanvas>
      <svg
        viewBox="0 0 900 900"
        width="100vw"
        height="calc(100vh + 100px)"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="Gradient1">
            <stop stopColor={color.primary} offset="0%" />
            <stop stopColor={color.lighter} offset="50%" />
            <stop stopColor={color.mediumlight} offset="100%" />
          </linearGradient>
          <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color.secondary} />
            <stop offset="80%" stopColor={color.medium} />
            <stop offset="100%" stopColor={color.mediumdark} />
          </linearGradient>
          <linearGradient id="Gradient3">
            <stop stopColor={color.light} offset="0%" />
            <stop stopColor={color.mediumdark} offset="50%" />
            <stop stopColor={color.mediumlight} offset="100%" />
          </linearGradient>
          <linearGradient id="Gradient4">
            <stop stopColor={color.primary} offset="0%" />
            <stop stopColor={color.medium} offset="50%" />
            <stop stopColor={color.secondary} offset="100%" />
          </linearGradient>
        </defs>
        <g>
          <path
            // eslint-disable-next-line max-len
            d="M0 300A1 1 0 01600 300L530 330 530 300A1 1 0 0030 300C30 310 29.953 310.286 32 330Z"
            fill="url(#Gradient1)"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 300 300"
            to="360 300 300"
            dur="41s"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <path
            d="M300 100A1 1 0 01300 500L270 580A1 1 0 00280 60Z"
            fill="url(#Gradient2)"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 300 300"
            to="0 300 300"
            dur="11s"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <path
            d="M500 300A1 1 0 01100 300L89 320A1 1 0 00520 260Z"
            fill="url(#Gradient3)"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 300 300"
            to="360 300 300"
            dur="19s"
            repeatCount="indefinite"
          />
        </g>
        <g>
          <path
            d="M0 300A1 1 0 00600 300L570 270A1 1 0 013 300Z"
            fill="url(#Gradient4)"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="360 300 300"
            to="0 300 300"
            dur="5s"
            repeatCount="indefinite"
          />
        </g>
        <circle cx="300" cy="300" r="190" fill={color.darker} />
        <svg width="206" height="84" viewBox="0 0 206 84" x="210" y="150">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M43.1797 65.6458C39.7532 69.0723 35.6112 70.7837 30.7499 70.7837C25.8886 70.7837 21.7429 69.0723 18.3164 65.6458C14.8936 62.2193 13.1785 58.0736 13.1785 53.2123V35.6446L30.7499 35.6409C35.6112 35.6409 39.7532 37.356 43.1797 40.7825C46.6062 44.209 48.3213 48.351 48.3213 53.2123C48.3213 58.0736 46.6062 62.2193 43.1797 65.6458ZM52.4928 31.4694C46.488 25.4684 39.2405 22.4661 30.7498 22.4661L13.1785 22.4624V0.167969L0 12.7085V53.2123C0 61.7066 3.00227 68.9542 9.00695 74.9552C15.008 80.9597 22.2555 83.9622 30.7498 83.9622C39.2405 83.9622 46.488 80.9597 52.4928 74.9552C58.4973 68.9542 61.496 61.7066 61.496 53.2123C61.496 44.7217 58.4973 37.4741 52.4928 31.4694Z"
            fill="url(#paint0_linear_108_133)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84.0644 22.496V83.9948H70.8837V22.496H84.0644Z"
            fill="url(#paint1_linear_108_133)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.634 22.496V83.9948H93.4529V22.496H106.634Z"
            fill="url(#paint2_linear_108_133)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            // eslint-disable-next-line max-len
            d="M115.949 22.496V83.9948H129.127V54.2997L157.68 82.8525V54.2997L187.375 83.9948H206L144.502 22.496V51.049L115.949 22.496Z"
            fill="url(#paint3_linear_108_133)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M84.0198 13.1746V0.00234731L70.8435 13.1729L84.0198 13.1746Z"
            fill="url(#paint4_linear_108_133)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M106.589 13.1729L93.4073 0.00234731V13.1746L106.589 13.1729Z"
            fill="url(#paint5_linear_108_133)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_108_133"
              x1="-0.603357"
              y1="180.102"
              x2="202.01"
              y2="180.102"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="1" stopColor="#FF47B1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_108_133"
              x1="-0.587125"
              y1="525.923"
              x2="201.989"
              y2="525.923"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="1" stopColor="#FF47B1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_108_133"
              x1="-0.581742"
              y1="525.924"
              x2="201.994"
              y2="525.924"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="1" stopColor="#FF47B1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_108_133"
              x1="-0.597896"
              y1="122.431"
              x2="202.01"
              y2="122.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="0.99" stopColor="#FF47B1" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_108_133"
              x1="-0.619539"
              y1="107.901"
              x2="202.032"
              y2="107.901"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="1" stopColor="#FF47B1" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_108_133"
              x1="-0.576138"
              y1="107.858"
              x2="201.989"
              y2="107.858"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E2F4" />
              <stop offset="1" stopColor="#FF47B1" />
            </linearGradient>
          </defs>
        </svg>
        <ClockContainer x="150" y="250" width="300" height="150">
          <CountdownClock>
            <CountdownClockLabel>The Event starts in</CountdownClockLabel>
            <CountdownClockGroup>
              <CountdownClockGroupNumber id="days">
                1067
              </CountdownClockGroupNumber>
              <CountdownClockGroupLabel>Days</CountdownClockGroupLabel>
            </CountdownClockGroup>
            <CountdownClockGroup>
              <CountdownClockGroupNumber id="hours">
                23
              </CountdownClockGroupNumber>
              <CountdownClockGroupLabel>Hours</CountdownClockGroupLabel>
            </CountdownClockGroup>
            <CountdownClockGroup>
              <CountdownClockGroupNumber id="minutes">
                59
              </CountdownClockGroupNumber>
              <CountdownClockGroupLabel>Minutes</CountdownClockGroupLabel>
            </CountdownClockGroup>
            <CountdownClockGroup>
              <CountdownClockGroupNumber id="seconds">
                48
              </CountdownClockGroupNumber>
              <CountdownClockGroupLabel>Seconds</CountdownClockGroupLabel>
            </CountdownClockGroup>
          </CountdownClock>
        </ClockContainer>
        <ClockEventBannerWrapper x="180" y="310" width="240" height="100">
          <ClockEventBannerEventDetail>Tom Walker</ClockEventBannerEventDetail>
          <ClockEventBannerEventSchedule>
            28.09.2022
            <br />
            19:00 (GMT)
          </ClockEventBannerEventSchedule>
        </ClockEventBannerWrapper>
        <ClockEventCallToActionWrapper x="200" y="400" width="200" height="50">
          <ClockEventCallToAction>Buy tickets</ClockEventCallToAction>
        </ClockEventCallToActionWrapper>
      </svg>
    </SpinnerCanvas>
  );
}
