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
import { fetchNewsArticles } from '../../Services/News/News';
import { Article } from '../../Model/News';
import { styles } from './style';
import { NewsCardComponent } from '../../Component/NewsCardComponent';

function NewsListScreen() {
    const [newsArticles, setNewsArticles] = useState<Article[]>([]);
    const [searchQuery, setSearchQuery] = useState('latest');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (searchQuery === '') {
            fetchNews('latest');
        } else {
            fetchNews(searchQuery);
        }
    }, [searchQuery]);

    const fetchNews = async (query: string) => {
        setLoading(true);
        const articles = await fetchNewsArticles(query);
        setNewsArticles(articles);
        setLoading(false);
    };


    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    const handleArticlePress = (url: string) => {
        Linking.openURL(url);
    };

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
