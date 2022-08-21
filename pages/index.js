import React, { Component } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getPosts } from "../lib/firebase";

export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <div className="card card-about">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Ny name is Nicholas Jordan Andersen. I'm a software engineering
            student, dad, and general nerd.
          </p>
        </section>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post) => (
            <li className={utilStyles.listItem} key={post.slug}>
              <h3>{post.title}</h3>
              {/* <Date dateString={post.dateCreated} /> */}
              <h4>{post.date}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post.content.substring(0, 200)}...`,
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
