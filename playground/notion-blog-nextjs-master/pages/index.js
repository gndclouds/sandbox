import { useState } from 'react';

import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";


export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  
  const [searchValue, setSearchValue] = useState('');
 const filteredBlogPosts = posts
 .sort(
   (a, b) =>
   Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
 );
 // .filter((posts) =>
 //   post.properties.Name.title.toLowerCase().includes(searchValue.toLowerCase())
 // );

  
  
  return (
    <div>
      <Head>
        <title>Notion Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
      <header className={styles.header}>
         
          <h1>Next.js blog powered by Notion API</h1>
          <p>
            This is an example of a Next.js blog with data fetched with Notions
            API. The data comes from{" "}
            <a href={`https://www.notion.so/${databaseId}`}>this table</a>. Get
            the source code on{" "}
            <a href="https://github.com/samuelkraft/notion-blog-nextjs">
              Github
            </a> or read{" "}
            <a href="https://samuelkraft.com/blog/building-a-notion-blog-with-public-api">my blogpost</a>{" "}
            on building your own.
          </p>
        </header>

        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            
          />
        </div>
        {!searchValue && (
          <>
          <h2 className={styles.heading}>All Posts</h2>
          <ol className={styles.posts}>
          {posts.map((post) => {
            return (
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
          </ol>
          </>
        )}
        
        {!searchValue && (
          <>
          <h2 className={styles.heading}>All Results</h2>
         {filteredBlogPosts.map((post) => {
           return (
             <ol className={styles.posts}>
             <li key={post.id} className={styles.post}>
               <h3 className={styles.postTitle}>
                 <Link href={`/${post.id}`}>
                   <a>
                     <Text text={post.properties.Name.title} />
                   </a>
                 </Link>
               </h3>
               <Link href={`/${post.id}`}>
                 <a> Read post →</a>
               </Link>
             </li>
             </ol>
           );
         })}
          </>
        )}
          
        {!filteredBlogPosts.length && 
          <p className="text-gray-600 dark:text-gray-400 mb-4">
          No posts found.
          </p>
        }
          
      </main> 
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }; 
};
