import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { getPosts } from "../lib/firebase";
import moment from "moment";

const name = "N. J. Andersen";
export const siteTitle = "From The Mind of N. J. Andersen";

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
    <main className="main">
      <div className="card card-about">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Image
          priority
          src="/images/Me-n-Fox2.jpg"
          className="profile-pic"
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
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
            <div className="card card-post">
              <li className={utilStyles.listItem} key={post.slug}>
                <h3>{post.title}</h3>
                {/* <Date dateString={post.date} /> */}
                <h4>{moment(post.date).format("LL")}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${post.content.substring(0, 200)}...`,
                  }}
                />
                <a href={`/posts/${post.slug}`}>Continue Reading</a>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </main>
  );
}
