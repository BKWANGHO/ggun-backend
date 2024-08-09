'use server'

export async function fetchMyArticleList(board: string): Promise<IArticle[] | { status: number }> {
    // const board = parseInt(board)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/api/boards/list${board}`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle[] = await response.json();
        if (data.length === 0) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.error("myArticleList err : " + error);
        return { status: 500 };
    }
}

export async function findByArticleId(id: string): Promise<IArticle | { status: number }> {
    // const board = parseInt(board)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/api/boards/list${id}`);

        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle = await response.json();
        if (data.length === 0) { return { status: 404 }; }

        console.log("myArticleList : " + JSON.stringify(data))

        return data
    } catch (error) {
        console.error("myArticleList err : " + error);
        return { status: 500 };
    }
}

export async function saveArticle(article: IArticle): Promise<IArticle[] | { status: number }> {
    // console.log("saveArticle : " + JSON.stringify(article))
    const { title, content, writerId, boardId } = article || {}
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/articles/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content,
                writerId: writerId,
                boardId: "2",
            })
        })
        if (!response.ok) { throw new Error('API Network response was not ok'); }
        const data:IArticle[] = await response.json();
        if (data.length === 0) { return { status: 404 }; }
        console.log("saveArticle : " + JSON.stringify(article))
        return data
    } catch (error) {
        console.error("saveArticle err : " + error);
        return { status: 500 };
    }
}
