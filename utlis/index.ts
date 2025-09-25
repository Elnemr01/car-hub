

export async function getYears() {
    let headers= {
        'x-rapidapi-key': 'c4c8091e91mshcfe54e1fce9bacdp15d839jsn012af51a051b',
        'x-rapidapi-host': 'car-api2.p.rapidapi.com'
    }

    let response= await fetch("https://car-api2.p.rapidapi.com/api/years",{headers});
    // console.log(response);

    let result=response.json();
    // console.log(result);

    return result;
}

export async function getCars() {
    let headers= {
        'x-rapidapi-key': 'c4c8091e91mshcfe54e1fce9bacdp15d839jsn012af51a051b',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    let response= await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",{
        headers,
    });
    // console.log(response);

    let result=response.json();
    // console.log(result);

    return result;
}