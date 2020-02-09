import React, {Dispatch, FunctionComponent, ReactElement, SetStateAction, useContext, useState} from 'react';
import {Carousel} from "react-bootstrap";

interface CarouselWrapperProps {
    content: ReactElement[]
}

export interface CarouselContext {
    index: number
    setIndex: Dispatch<SetStateAction<number>>
}

const initialCarouselContext: CarouselContext = {
    index: 0,
    setIndex: newIndex => {
    }
};

export const CarouselContext = React.createContext(initialCarouselContext);

export const useCarouselContext = () => {
    return useContext<CarouselContext>(CarouselContext)
};

export const CarouselContextProvider: FunctionComponent<{ children: ReactElement }> = ({children}) => {

    const [index, setIndex] = useState<number>(0);
    return (
        <CarouselContext.Provider
            value={{
                index,
                setIndex
            }}
        >
            {children}
        </CarouselContext.Provider>
    )
};

const CarouselWrapper: FunctionComponent<CarouselWrapperProps> = ({content}) => {

    const {index} = useCarouselContext();

    return (
        <Carousel className={"carousel"}
            activeIndex={index}
            interval={null}
            prevIcon={null}
            nextIcon={null}
            indicators={false}
            controls={false}
            touch={true}
        >
            {
                content.map(
                    (item: ReactElement, index: number) => {
                        return (
                            <Carousel.Item>
                                {item}
                            </Carousel.Item>
                        )
                    }
                )
            }
        </Carousel>
    );
};

export default CarouselWrapper;