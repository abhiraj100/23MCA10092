async function registerCompany() {
    const registerUrl = "http://20.244.56.144/test/register";
    
    const registrationData = {
        companyName: "goMart",
        ownerName: "Rahul",
        rollNo: "1",
        ownerEmail: "rahul@abc.edu",
        accessCode: "FKDLjg"
    };

    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
        });

        if (response.ok) {
            const companyInfo = await response.json();
            console.log("Company registered successfully!");
            console.log("Client ID:", companyInfo.clientID);
            console.log("Client Secret:", companyInfo.clientSecret);
            return companyInfo;
        } else {
            const errorData = await response.json();
            console.error("Company registration failed:", errorData);
            return null;
        }
    } catch (error) {
        console.error("Failed to register company:", error);
        return null;
    }
}

async function obtainAuthorizationToken(clientID, clientSecret) {
    const tokenUrl = "http://20.244.56.144/test/token";

    const tokenData = {
        clientID,
        clientSecret,
        grant_type: "client_credentials"
    };

    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tokenData)
        });

        if (response.ok) {
            const tokenInfo = await response.json();
            console
