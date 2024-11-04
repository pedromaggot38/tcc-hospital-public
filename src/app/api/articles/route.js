import { db } from "@/lib/db";

export async function GET() {
    try {
        const publishedArticles = await db.article.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });

        return new Response(JSON.stringify(publishedArticles), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Erro ao buscar artigos:", error);
        return new Response("Erro ao buscar artigos", { status: 500 });
    }
}