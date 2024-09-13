import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { fetchNewsArticles } from '../../Services/News/News';
import { Article } from '../../Model/News';
import { styles } from './style';

function NewsListScreen() {
    const [newsArticles, setNewsArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch the latest news when the app launches
    useEffect(() => {
        fetchLatestNews();
    }, []);

    const fetchLatestNews = async () => {
        setLoading(true);
        const articles = await fetchNewsArticles();
        console.log('articles:', articles);
        setNewsArticles(articles);
        setLoading(false);
    };


    return (
        <SafeAreaView style={styles.container}>


        </SafeAreaView>
    );
};

export default NewsListScreen;
