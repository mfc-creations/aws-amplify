exports.handler = async(event) => {
    const customerId = event.pathParameters.customerId;
    const customer = {
        customerId: customerId,
        customerName: "Customer " + customerId,
    };
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify(customer),
    };
    return response;
};