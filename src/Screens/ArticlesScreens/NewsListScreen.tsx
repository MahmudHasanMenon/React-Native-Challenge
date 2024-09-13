import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    TextInput,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Alert,
    TouchableOpacity,
    Image,
    Linking,
} from 'react-native';
import { fetchNewsArticles } from '../../Services/News/News';
import { Article } from '../../Model/News';
import { styles } from './style';
import { NewsCardComponent } from '../../Component/NewsCardComponent';

function NewsListScreen() {
    const [newsArticles, setNewsArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch the latest news when the app launches
    useEffect(() => {
        fetchLatestNews('latest');
    }, []);

    const fetchLatestNews = async (query: string) => {
        setLoading(true);
        const articles = await fetchNewsArticles(query);
        console.log('articles:', articles);
        setNewsArticles(articles);
        setLoading(false);
    };

    const handleArticlePress = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style={styles.container}>


            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : newsArticles.length > 0 ? (
                <FlatList
                    data={newsArticles}
                    renderItem={({ item }) => (
                        <NewsCardComponent item={item} handleArticlePress={handleArticlePress} />
                    )}
                    keyExtractor={(item, index) => `article-${index}`}
                    style={{ paddingHorizontal: 20, marginTop: 20 }}
                />
            ) : (
                <Text>No articles found.</Text>
            )}
        </SafeAreaView>
    );
};

export default NewsListScreen;
