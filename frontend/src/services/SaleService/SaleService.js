const end_point = process.env.REACT_APP_ENDPOINT;
export const CreateSale = async (customer_id, start_date, end_date, discount, shop) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_id: customer_id, start_date: start_date, end_date: end_date, discount: discount, shop: shop })
    }

    try {
        const response = await fetch(`${end_point}/sales/create`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating sale', error);
        return null;
    }
};

export const DeleteSale = async (sales_id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(`${end_point}/sales/${sales_id}`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting sale', error);
        return null;
    }
};

export const EditSale = async (customer_id, sales_id, start_date, end_date, discount, shop) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_id: customer_id, sales_id: sales_id, start_date: start_date, end_date: end_date, discount: discount, shop: shop })
    }

    try {
        const response = await fetch(`${end_point}/sales/edit`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error editing sale', error);
        return null;
    }
};

export const GetSale = async (customer_id) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const response = await fetch(`${end_point}/sales?customer_id=${customer_id}`, options);

        const data = await response.json();
        if (data.error) {
            return [];
        }
        else {
            return data;
        }
    } catch (error) {
        console.error('Error getting sale', error);
        return null;
    }
};