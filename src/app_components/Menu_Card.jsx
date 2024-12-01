/* eslint-disable react/prop-types */
import { Image } from '@chakra-ui/react'
import { LuBike } from 'react-icons/lu';
import { CardBody, CardDescription, CardFooter, CardHeader, CardRoot } from
'@chakra-ui/react/card'
import { Heading, Text, Flex } from "@chakra-ui/react";
import './css/MenuCard.css'

function MenuCard(props) {

    return (
        <CardRoot maxWidth={'320px'} Height={'400px'}
        borderRadius={'16px'} margin={'20px auto'}>
            <Image src={props.img}  height={'200px'}
                borderTopRadius={'10px'}/>
            <CardBody className='card-body'>
                <Flex justifyContent={'space-between'} margin={'12px'}>
                    <CardHeader fontWeight={'bold'}>{props.item}</CardHeader>
                    <Text color={'Highlight'}>${props.price}</Text>
                </Flex>
                <CardDescription margin={'12px'}>
                    {props.description}
                </CardDescription>
            </CardBody>
            <CardFooter className='card-footer' margin={'12px'}>
                <Heading size={'md'}>Order a Delivery</Heading>
                <LuBike color='green'/>
            </CardFooter>
        </CardRoot>
    )
}

export default MenuCard