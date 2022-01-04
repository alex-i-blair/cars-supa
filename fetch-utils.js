
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTMzNTI1MCwiZXhwIjoxOTU2OTExMjUwfQ._6oEzBPavtaUjc5bj9DQL-cR3KcsDdK9j6AET2Pd6Ek';


const SUPABASE_URL = 'https://npihlfsmxggucpycootw.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCars() {
    const response = await client
        .from('cars')
        .select();
    console.log(response);
    return response.data;
}

export async function getCar(id) {
    const response = await client
        .from('cars')
        .select()
        .match({ id })
        .single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
