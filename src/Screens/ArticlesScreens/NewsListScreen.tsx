/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    TextInput,
    Text,
    View,
    ActivityIndicator,
    Linking,
} from 'react-native';
import { fetchNewsArticles, fetchFilteredNewsArticles } from '../../Services/News/News';
import { Article } from '../../Model/News';
import { styles } from './style';
import { NewsCardComponent } from '../../Component/NewsCardComponent';

const PAGE_SIZE = 10;

function NewsListScreen() {
    const [newsArticles, setNewsArticles] = useState<Article[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    useEffect(() => {
        fetchNews('latest', page);
    }, [page]);

    const fetchNews = async (query: string, pageNumber: number) => {
        if (loadingMore) return;
        setLoadingMore(true);

        const articles = await fetchNewsArticles(query, pageNumber);
        if (articles.length < PAGE_SIZE) {
            setHasMore(false);
        }
        setNewsArticles(prevArticles => [...prevArticles, ...articles]);
        setLoadingMore(false);
        setLoading(false);
    };

    const filteredNews = async (query: string) => {
        const filteredArticles = await fetchFilteredNewsArticles(query);
        setNewsArticles(filteredArticles);
        setLoading(false);
    };


    const handleSearch = (text: string) => {
        setSearchQuery(text);
        if (text === '') {
            fetchNews('latest', page);
        } else {
            filteredNews(searchQuery);
        }
    };

    const handleLoadMore = () => {
        if (hasMore && !loadingMore && searchQuery === '') {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleArticlePress = (url: string) => {
        Linking.openURL(url);
    };

    if (loading && page === 1) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search articles"
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>
            {
                newsArticles.length > 0 ? (
                    <FlatList
                        data={newsArticles}
                        renderItem={({ item }) => (
                            <NewsCardComponent item={item} handleArticlePress={handleArticlePress} />
                        )}
                        keyExtractor={(item, index) => `article-${index}`}
                        style={{ paddingHorizontal: 20, marginTop: 20 }}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
                    />
                ) : (
                    <Text>No articles found.</Text>
                )
            }
        </SafeAreaView>
    );
};

export default NewsListScreen;
