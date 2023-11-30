export const LoginUser = async (userID, password) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_id: userID, password: password })
    }

    try {
        const response = await fetch(`https://ga8psl1bd3.execute-api.us-east-1.amazonaws.com/prod/customer/login`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error logging in', error);
        return null;
    }
};

export const SignUpUser = async (userID, password) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_id: userID, password: password })
    }

    try {
        const response = await fetch(`https://ga8psl1bd3.execute-api.us-east-1.amazonaws.com/prod/customer/signup`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error signing up', error);
        return null;
    }
};

export const SubscribeUser = async (userID) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer_id: userID })
    }

    try {
        const response = await fetch(`https://ga8psl1bd3.execute-api.us-east-1.amazonaws.com/prod/customer/subscribe`, options);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error signing up', error);
        return null;
    }
};
