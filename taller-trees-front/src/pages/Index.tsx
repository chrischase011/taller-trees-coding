import { Container, Flex, Text} from "@radix-ui/themes";
import HeroBanner from '../components/HeroBanner';
import ChartView from "../components/ChartView";

const Index = () => {
  return (
    <Container size="1">
        <Flex direction="column" gap="2">
            <HeroBanner title="Taller Trees Chart" />

            <ChartView />
        </Flex>
    </Container>
  )
}

export default Index