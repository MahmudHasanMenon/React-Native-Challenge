import axios from 'axios';
import { Article } from '../../Model/News';
import { Urls } from '../../Networking/urls';

const API_KEY = '2c62f09c27c841fe8e6d86f2419128d2'; 
const PAGE_SIZE = 20;

export const fetchNewsArticles = async (query: string = '', pageNumber : number = 1): Promise<Article[]> => {
    try {
      const response = await axios.get(
        `${Urls.Base_URL}?q=${query}&pageSize=${PAGE_SIZE}&page=${pageNumber}&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news articles:', error);
      return [];
    }
  };

  export const fetchFilteredNewsArticles = async (query: string = ''): Promise<Article[]> => {
    try {
      const response = await axios.get(
        `${Urls.Base_URL}?q=${query}&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching news articles:', error);
      return [];
    }
  };