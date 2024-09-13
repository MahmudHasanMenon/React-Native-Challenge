import { ScaledSheet } from 'react-native-size-matters';

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },

    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    articleContainer: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },

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
});