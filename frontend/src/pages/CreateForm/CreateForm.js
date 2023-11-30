import { Button, Flex, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateSale } from "../../services/SaleService/SaleService";

const CreateForm = () => {
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');
    const [shop, setShop] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const customer_id = localStorage.getItem('salestarUser');

    const handleCreateDiscount = async (event) => {
        event.preventDefault();

        const response = await CreateSale(customer_id, start_date, end_date, discount, shop);
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
        <form onSubmit={handleCreateDiscount}>
            <Flex width="100%" justify="center">

                <Flex align="center" justify="center" h="80vh" width="1080px" flexDirection="column" >
                    <Text fontWeight="bold" mb="10px" fontSize="2xl">Create New Sale</Text>


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
                    <Button colorScheme="teal" type="submit" >
                        Create
                    </Button>

                </Flex>
            </Flex>
        </form>



    );
};

export default CreateForm;