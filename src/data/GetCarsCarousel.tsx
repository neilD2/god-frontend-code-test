import React, {useState, useEffect} from 'react'
import {Card, Text, CardContent, Spacer, Link} from 'vcc-ui';
import Carousel from "../components/carousel/Carousel";
import styled from "styled-components";

export default function GetCarsCarousel() {
    const [myArray, setMyArray] = useState<any[]>([])

    const getMyData = async () => {
        const response = await fetch('api/cars.json')
        const data = await response.json()
        setMyArray(data)
    }

    useEffect(() => {
        getMyData();
    }, []);

    const SContainer = styled.div`
      align-items: center;
      display: flex;
    `;

    const SImage = styled.img`
      @media (max-width:860px){
        width: 250px
      }
    `;

    const STextWrapper = styled.div`
      display: flex;
      flex-direction: column;
      margin: 5px 10px;
    `;

    const SLinkWrapper = styled.div`
      display: flex;
      justify-content: space-around;
      padding: 30px;
    `;

    const cards = myArray.map((card, index) =>
        <SContainer>
            <STextWrapper>
                <Card key={index}>
                    <CardContent>
                        <Text variant="ootah">{card.bodyType}</Text>
                        <Spacer/>
                        <Text subStyle="emphasis">{card.modelName}</Text>
                    </CardContent>
                    <SImage src={card.imageUrl} alt={`Image of ${card.modelName}`}/>
                    <SLinkWrapper>
                        <Link href={`/learn/${card.id}`} arrow="right">
                            Learn
                        </Link>
                        <Link href={`/shop/${card.id}`} arrow="right">
                            Shop
                        </Link>
                    </SLinkWrapper>
                </Card>
            </STextWrapper>
        </SContainer>
    )

    return (<Carousel>{cards}</Carousel>)
}
