import { getPostBySlug } from "../../lib/firebase";
import moment from "moment";

export async function getServerSideProps(context) {
  const post = await getPostBySlug(context.query.slug);
  console.log("this is the severside props: ", post);

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({ post }) {
  return (
    <main>
      {post.map((post) => (
        <div className="post-page-container">
          <h1>{post.title}</h1>
          <h2>Published {moment(post.date).format("LL")}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      ))}
    </main>
  );
}
