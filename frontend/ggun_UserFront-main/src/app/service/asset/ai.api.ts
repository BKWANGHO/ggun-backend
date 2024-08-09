'use server'

export async function existAccount(): Promise<boolean | { status: number }> {
    const id = 1;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts/exists/?id=${id}`)
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data: boolean = await response.json();
        if (data == undefined || data == null) { return { status: 404 }; }
        console.log("existAccount!!!" + JSON.stringify(data))
        return data
    } catch (error) {
        console.error("existAccount err : " + error);
        return { status: 500 };
    }
}