import axios from 'axios';
import { Article } from '../../Model/News';
import { Urls } from '../../Networking/urls';

const API_KEY = '1125d3c3d6d1489291514983934667b3'; 

export const fetchNewsArticles = async (query: string = ''): Promise<Article[]> => {
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