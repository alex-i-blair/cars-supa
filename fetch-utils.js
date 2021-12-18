
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTc4NzE0OCwiZXhwIjoxOTU1MzYzMTQ4fQ.7scajYXYWyP_HSuQSqT-_Jj5mNA4lTwGigaUkSy0vk8';


const SUPABASE_URL = 'https://piaqjulqjuhvkhhoriep.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCars() {
    const response = await client
        .from('cars')
        .select();

    return checkError(response);
}

export async function getCar(id) {
    const response = await client
        .from('cars')
        .select()
        .match({ id, })
        .single();
    return checkError(response);
}







function checkError({ data, error }) {
    return error ? console.error(error) : data;
}