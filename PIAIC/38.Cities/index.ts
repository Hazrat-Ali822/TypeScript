function describe_city(city: string, country: string = "Unknown"): void {
    console.log(`${city} is in ${country}`);
}

describe_city("Karachi", "Pakistan");
describe_city("SomeCity"); // Without providing the country, it will use the default value "Unknown"
