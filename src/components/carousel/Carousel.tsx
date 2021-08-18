import * as React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Chevron } from "../../assets/chevron-circled.svg";

const SCarouselWrapper = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar; 
`;

const SChevronWrapper = styled.div`
  float: right;
  height: 50px;
  display: flex;
  @media (max-width:860px){
    display:none;
  }
`;

interface ICarouselSlide {
    active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  transition: all 0.5s ease;
  width: fit-content;
`;

interface ICarouselProps {
    currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${props =>
          props.currentSlide &&
          css`
      transform: translateX(-${props.currentSlide * 10}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
    children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const activeSlide = children.map((slide, index) => (
        <SCarouselSlide active={currentSlide === index} key={index}>
            {slide}
        </SCarouselSlide>
    ));

    return (
        <div>
            <SCarouselWrapper>
                <SCarouselSlides currentSlide={currentSlide}>
                    {activeSlide}
                </SCarouselSlides>
            </SCarouselWrapper>
            <SChevronWrapper>
                <Chevron
                    style={{ maxHeight: '60px', transform: "rotate(180deg)", padding: "4px"}}
                    onClick={() => {
                        setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                    }}
                >
                    Right
                </Chevron>
                <Chevron
                    style={{ maxHeight: '60px', padding: "4px"}}
                    onClick={() => {
                        setCurrentSlide((currentSlide + 1) % activeSlide.length);
                    }}
                >
                </Chevron>
            </SChevronWrapper>
        </div>
    );
}

export default Carousel;
