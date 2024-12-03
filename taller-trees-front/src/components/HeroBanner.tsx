import { Flex, Text } from '@radix-ui/themes';
import React from 'react';

interface HeroBannerProps {
    title: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title }) => {
    return (
        <Flex direction="column" align="center" gap="2">
            <Text className="text-3xl font-semibold">{title}</Text>
        </Flex>
    );
};

export default HeroBanner;
