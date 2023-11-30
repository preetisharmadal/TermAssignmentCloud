import { Button, CircularProgress, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetSale } from '../../services/SaleService/SaleService';
import { theme } from '../../theme';

function LandingPage() {
    const customer_id = localStorage.getItem('salestarUser');
    const navigate = useNavigate();
    const [salesList, setSalesList] = useState([]);
    const [loading, setLoading] = useState("false");
    useEffect(() => {
        const fetchData = async () => {
            setLoading("true");
            const response = await GetSale(customer_id);

            setSalesList(response);
            setLoading("false");
        }
        fetchData();
    }, []);
    return (
        loading === "false" ?

            <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} justifyContent="center" >
                <Flex flexDir="column" gap="12px" width="1080px" alignItems="center">
                    <Flex justifyContent="space-between" alignItems="center" mt="50px" width="720px">
                        <Heading >Upcoming Sales</Heading>
                        <Button bgColor={theme.secondaryBackground} onClick={() => navigate(`/sales/createform`)}>Create</Button>
                    </Flex>
                    {
                        salesList.map((sale, index) =>
                            <button onClick={() => navigate(`/sales/${sale.sales_id}`)} >
                                <Flex mt="20px" flexDirection="row" border="2px" width="720px" borderColor={theme.primaryForeground} bgColor={theme.secondaryBackground} borderRadius="8px" padding="24px" justifyContent="space-between" >
                                    <Text>{sale.shop}</Text>
                                    <Text>{sale.discount}%</Text>
                                </Flex>
                            </button>
                        )
                    }


                </Flex>

            </Flex >
            :
            <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} flexDir="column" alignItems="center" justifyContent="center">
                <CircularProgress isIndeterminate color="teal" />
            </Flex>
    );
}

export default LandingPage;