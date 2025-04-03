export const getCatBreed = async (limit) => {
    const response = await fetch(`https://catfact.ninja/breeds?limit=${limit}`, {
        headers: {
            Accept: "application/json"
        }
    }
    
);

    if (!response.ok) {
        throw new Error("Could not get data");
    }
     
    const data = await response.json();
    return data.data; 
   
}

