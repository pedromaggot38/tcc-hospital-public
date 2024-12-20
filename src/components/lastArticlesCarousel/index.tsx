'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Button } from '../ui/button';

SwiperCore.use([Autoplay]);

interface Article {
    slug: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    createdAt: string;
}

const SkeletonCard: React.FC = () => (
    <div className="relative rounded-lg overflow-hidden animate-pulse">
        <div className="relative w-full h-40 bg-gray-200"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gray-300 bg-opacity-50">
            <div className="w-3/4 h-6 bg-gray-400 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
        </div>
    </div>
);

const LastArticlesCarousel: React.FC = () => {
    const [lastArticles, setLastArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/api/lastArticlesCarousel');
                if (!response.ok) {
                    throw new Error("Failed to fetch last articles");
                }
                const articles = await response.json();
                if (Array.isArray(articles)) {
                    setLastArticles(articles);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (error) {
                console.error("Failed to fetch last articles:", error);
                setError("Ocorreu um erro ao buscar as últimas notícias.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (isLoading) {
        return (
            <div className="block xl:hidden overflow-y-scroll pt-2 xl:pt-0">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {[...Array(2)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <SkeletonCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className='block xl:hidden'>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Notícias Recentes</h2>
                <Button variant="link">
                    <Link href="/articles">Ver todas</Link>
                </Button>
            </div>
            <div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {lastArticles.map((article) => (
                        <SwiperSlide key={article.slug}>
                            <Link href={`/articles/${article.slug}`} className="block relative rounded-lg overflow-hidden">
                                <div className="relative w-full h-40">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={article.imageUrl || '/news-placeholder.png'}
                                            alt={article.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'bottom'
                                            }}
                                            className="rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-45 text-white">
                                    <p className="absolute top-2 left-2 bg-gray-900 bg-opacity-75 text-white text-xs rounded px-2 py-1">
                                        {new Date(article.createdAt).toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </p>
                                    <h2 className="text-lg font-semibold text-gray-100 line-clamp-2">{article.title}</h2>
                                    <p className="text-sm mt-1 text-gray-100 line-clamp-2">{article.subtitle}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default LastArticlesCarousel;
