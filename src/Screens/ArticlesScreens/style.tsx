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
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});