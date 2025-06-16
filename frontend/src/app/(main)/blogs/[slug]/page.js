import styles from "./styles.module.css";
import CustomImage from "@/components/custom/Image";

const getBlogDetailData = async (slug) => {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${slug}?access_key=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  );
  let blogsData = await data.json();
  return blogsData;
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let res = await getBlogDetailData(slug);
  if (res?.success) {
    return {
      title: `${res?.data.title} | The Bot Agenc`,
      description: `${res?.data.description}`,
      keywords: `${res?.data?.keywords}`,
      tags: `${res?.data?.tags}`,
    };
  } else {
    return {
      title: `Not Found | The Bot Agency`,
      description: `Not Found`,
      keywords: `The Bot Agency`,
    };
  }
}

const BlogDetailsPage = async ({ params }) => {
  const { slug } = await params;
  let res = await getBlogDetailData(slug);

  return (
    <>
      <div className="container mt-5">
        <div className={`${styles.blog_page_bg} p-5`}>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/blogs">Blogs</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {slug}
              </li>
            </ol>
          </nav>
          {res?.success ? (
            <>
              <div className={styles.blog_page_wrapper}>
                <CustomImage src={res.data.image} />
              </div>
              <h1 className="py-4 text-uppercase fw-bold text-center fadeIn text-capitalize">
                {res.data.title}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: res.data.content,
                }}
                className="fadeIn"
              ></div>
            </>
          ) : (
            <div className="text-center py-3 fw-bold fs-2">Not Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
