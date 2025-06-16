import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import TitleBanner from "@/components/TitleBanner";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Blogs | The Bot Agency",
    description:
      "Explore SEO, branding, automation, LinkedIn outreach, paid advertising, and industry-specific trends to scale your business globally.",
    keywords:
      "B2B marketing blogs, Export business growth strategies blogs, SaaS lead generation insights, Global branding for B2B company blogs",
  };
}

const BlogListPage = async () => {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/?access_key=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  );
  let blogsData = await data.json();

  return (
    <>
      <TitleBanner
        title={`The Bot Blog`}
        bgColor="linear-gradient(90deg, #04041e 5%,rgb(35, 35, 89) 24%, #000000 100%)"
        showContactUs={false}
      />
      <div className={``}>
        <div className={`container  ${style.blog_page_bg} py-5`}>
          <div className="row g-0 justify-content-start flex-wrap">
            {blogsData?.results?.map((blog, blogIdx) => {
              return (
                <div className="" key={`blog-${blogIdx}`}>
                  <div
                    className={`${style.blog_container} d-flex flex-wrap fadeIn`}
                  >
                    {/* {blog.image.includes(
                      process.env.NEXT_PUBLIC_API_BASE_URL
                    ) ? (
                      <CustomImage
                        src={blog.image}
                        imgClass={style.blog_img}
                        wrapperClss={style.img_wrapper}
                      />
                    ) : (
                      <CustomImage
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${blog.image}`}
                        imgClass={style.blog_img}
                        wrapperClss={style.img_wrapper}
                      />
                    )} */}
                    <CustomImage
                      src={blog.image}
                      imgClass={style.blog_img}
                      wrapperClss={style.img_wrapper}
                    />

                    <div
                      className={`px-3 d-flex align-items-center ${style.blog_short_desc}`}
                    >
                      <div>
                        <div className={`${style.blog_item__info} pb-2`}>
                          <span className="pe-2">
                            {new Date(blog?.date).toLocaleString("lookup")}
                          </span>
                          <span>
                            <i
                              className={`fa fa-circle ${style.dot_icon} pe-2`}
                              aria-hidden="true"
                            ></i>
                            {blog.time_to_read}
                          </span>
                        </div>
                        <div className={`${style.blog_title} text-capitalize`}>
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="text-capitalize"
                          >
                            {blog.title}
                          </Link>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: blog.description,
                          }}
                        ></div>
                        <Link href={`/blogs/${blog.slug}`}>
                          <span href="#"> Read more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom border-2 py-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
