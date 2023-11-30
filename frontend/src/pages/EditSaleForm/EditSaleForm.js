import { Button, CircularProgress, Flex, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditSale, GetSale } from "../../services/SaleService/SaleService";
import { theme } from '../../theme';

const EditSaleForm = () => {
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');
    const [shop, setShop] = useState('');
    const navigate = useNavigate();
    const [salesList, setSalesList] = useState([]);
    const [loading, setLoading] = useState("false");
    const toast = useToast();
    const customer_id = localStorage.getItem('salestarUser');
    const { sales_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setLoading("true");
            const response = await GetSale(customer_id);

            setSalesList(response);
            response.map((sale, index) => {
                if (sale.sales_id === sales_id) {
                    setStartDate(sale.start_date);
                    setEndDate(sale.end_date);
                    setShop(sale.shop);
                    setDiscount(sale.discount);
                }
            })
            setLoading("false");
        }
        fetchData();
    }, []);

    const handleEditDiscount = async (event) => {
        event.preventDefault();

        const response = await EditSale(customer_id, sales_id, start_date, end_date, discount, shop);
        if (response.sales_id) {
            toast({
                title: 'Creation Successful',
                description: 'You have successfully created a sale!',
                status: 'success',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
            navigate("/")
        }
        else {
            toast({
                title: 'Creation Unsuccessful',
                description: 'There was an error creating your sale!',
                status: 'error',
                duration: 5000, // Duration in milliseconds
                isClosable: true,
            });
        }
    };

    return (
        loading === "false" ?
            <form onSubmit={handleEditDiscount}>
                <Flex width="100%" justify="center">

                    <Flex align="center" justify="center" h="80vh" width="1080px" flexDirection="column" >
                        <Text fontWeight="bold" mb="10px" fontSize="2xl">Update Sale</Text>



                        <FormControl mb={4}>
                            <FormLabel>Start Date</FormLabel>
                            <Input
                                type="date"
                                value={start_date}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>End Date</FormLabel>
                            <Input
                                type="date"
                                value={end_date}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Discount</FormLabel>
                            <Input
                                type="number"
                                placeholder="Enter discount percentage"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Shop</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter shop name"
                                value={shop}
                                onChange={(e) => setShop(e.target.value)}
                            />
                        </FormControl>
                        <Button colorScheme="teal" type="submit">
                            Update
                        </Button>

                    </Flex>
                </Flex>
            </form>
            :
            <Flex w="100%" minHeight="90vh" backgroundColor={theme.primaryBackground} flexDir="column" alignItems="center" justifyContent="center">
                <CircularProgress isIndeterminate color="teal" />
            </Flex>



    );
};

export default EditSaleForm;