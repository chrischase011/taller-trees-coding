import { Container, Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface AveragePriceData {
    tall: number;
    short: number;
}

const ChartView: React.FC = () => {
    const [data, setData] = useState<AveragePriceData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAveragePriceData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/average_prices");
                const data: AveragePriceData = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchAveragePriceData();
    }, []);

    // Prepare the chart data from the `data` object
    const chartData = data
        ? [
              { name: 'Tall', price: data.tall.toFixed(2) },
              { name: 'Short', price: data.short.toFixed(2) },
          ]
        : [];

    return (
        <Container>
            {loading ? (
                <Text align={'center'}>Loading...</Text>
            ) : (
                <Flex direction="column" gap="2" style={{ width: '100%', height: 400 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            {/* <Bar dataKey="price" fill="#8884d8" /> */}
                            <Bar animationDuration={1000} dataKey="price">
                                {
                                chartData.map((entry, index) => (
                                    <Cell key={`key-${index}`} fill={index === 0 ? '#8884d8' : '#c026d3'} />
                                ))
                            }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Flex>
            )}
        </Container>
    );
};

export default ChartView;
