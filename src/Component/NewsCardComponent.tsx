import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Article } from '../Model/News';

interface NewsCardProps {
    item: Article;
    handleArticlePress: (url: string) => void;
};

export const NewsCardComponent: React.FC<NewsCardProps> = ({
    item,
    handleArticlePress
}) => {
    return (
        <>
            <TouchableOpacity onPress={() => handleArticlePress(item.url)} style={styles.card}>
                {item.urlToImage ? (
                    <Image source={{ uri: item.urlToImage }} style={styles.image} />
                ) : (
                    <View style={styles.imagePlaceholder} />
                )}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    image: {
        width: 100,
        height: 100,
    },
    imagePlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#f0f0f0',
    },
    textContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        color: '#555',
    },

})

