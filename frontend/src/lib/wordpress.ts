import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// WordPress GraphQL Client
export const wpClient = new ApolloClient({
  uri: process.env.WORDPRESS_API_URL || 'https://gleamled.com/graphql',
  cache: new InMemoryCache(),
});

// GraphQL Queries for WordPress
export const GET_PAGES = gql`
  query GetPages {
    pages {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 100) {
      nodes {
        id
        name
        slug
        description
        image {
          sourceUrl
          altText
        }
        productCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_MEDIA = gql`
  query GetMedia {
    mediaItems(first: 50) {
      nodes {
        id
        sourceUrl
        altText
        title
      }
    }
  }
`;
