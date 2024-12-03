import { Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react"

interface AveragePriceData {
    tall: number;
    short: number;
}

const ChartView: React.FC = () => {
    const [data, setData] = useState<AveragePriceData | null>(null)
    const [loading, setLoading] = useState(true) 

    useEffect(() => {
        const fetchAveragePriceData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/average_prices")
                const data = await response.json()
                setData(data)
                setLoading(false)
            }
            catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchAveragePriceData()
    }, [])

    return (
        <>
            <div>
                <h1>Fetched Data:</h1>
                {loading ? (
                    <p>Loading...</p> // Loading indicator
                ) : (
                    <div>
                        {data ? (
                            <>
                                <Text>Streets with tall trees: {data.tall}</Text>
                                <Text>Streets with short trees: {data.short}</Text>
                            </>
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default ChartView