import { Button, CircularProgress, Flex, Heading, Text, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { DeleteSale, GetSale } from '../../services/SaleService/SaleService';
import { theme } from '../../theme';

function SalePage() {
    const customer_id = localStorage.getItem('salestarUser');
    const { sales_id } = useParams();
    const navigate = useNavigate();
    const toast = useToast();
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

    const handleDelete = async () => {
        const response = await DeleteSale(sales_id);
        if (response.sales_id) {
            toast({
                title: 'Deletion Successful',
                description: 'You have successfully deleted the sale!',
                status: 'success',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
            navigate("/");
        }
        else {
            toast({
                title: 'Deletion Unsuccessful',
                description: 'There was an error deleting your sale!',
                status: 'error',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
        }
    }


    return (
        loading === "false" ?

            <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} justifyContent="center" >
                <Flex flexDir="column" gap="12px" width="1080px" alignItems="center">
                    <Heading mt="50px">SALE</Heading>
                    {
                        salesList.map((sale, index) =>
                            sale.sales_id === sales_id ?

                                <Flex mt="20px" flexDirection="column" width="720px" gap="20px" alignItems="center">
                                    <Text fontWeight="bold" fontSize="6xl">{sale.shop}</Text>
                                    <Text fontWeight="semibold" fontSize="4xl">{sale.discount}%</Text>
                                    <Text fontSize="4xl">{sale.start_date}</Text>
                                    <Text fontSize="4xl">{sale.end_date}</Text>
                                    <Flex gap="60px" mt="20px">
                                        <Button bgColor="#ae190f" onClick={handleDelete}>DELETE</Button>
                                        <Button bgColor={theme.secondaryBackground} onClick={() => navigate(`edit`)}>UPDATE</Button>
                                        <Button bgColor={theme.secondaryBackground}>NOTIFY</Button>
                                    </Flex>
                                </Flex>

                                :
                                null
                        )
                    }


                </Flex>

            </Flex>
            :
            <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} flexDir="column" alignItems="center" justifyContent="center">
                <CircularProgress isIndeterminate color="teal" />
            </Flex>
    );
}

export default SalePage;