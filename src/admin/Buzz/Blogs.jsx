import { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { API_URL } from "../../apis/url";
import { protectedApiPostAdmin } from "../../apis/api";
import { CircularProgress } from "@mui/material";
import { useAuth } from "../../redux/counterSlice";
import { toast } from "react-toastify";

function Blogs() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [editorData, setEditorData] = useState("");
  const [typeValue, setType] = useState(1);
  const [title, setTitle] = useState("");
  const [titleBody, setTitleBody] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [slug, setSlug] = useState("");
  const [toc, setToc] = useState("");
  const [writer, setWriter] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState();
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [inlineImg, setInlineImg] = useState();
  const [blogCategory, setBlogCategory] = useState("vyug");
  const [loading, setLoading] = useState(false);

  const dateToShow = new Date(currentDate);
  dateToShow.setUTCMinutes(dateToShow.getUTCMinutes() + 330);

  const uploadAdapter = (loader) => {
    return {
      upload: async () => {
        // Create form data and append the file
        const formData = new FormData();
        const file = await loader.file; // Wait for the file to be loaded
        formData.append("file", file); // Append the file with key 'upload'

        try {
          const response = await protectedApiPostAdmin(
            "blogs/blogImage",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("success", response.data);

          return { default: response.data };
        } catch (error) {
          console.error(
            "Image upload failed:",
            error.response?.data?.message || error.message
          );
          throw new Error("Image upload failed");
        }
      },
      abort: () => {
        console.log("Image upload aborted");
      },
    };
  };

  // Function to add the custom upload adapter to CKEditor
  const handleEditorReady = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
    console.log("Editor is ready to use!", editor);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    let plainText = editorData.replace(/<[^>]*>?/gm, "");
    plainText = plainText.replace(/&nbsp;/g, " ");
    const content = plainText.substring(0, 220) + "...";

    try {
      setLoading(true);
      await protectedApiPostAdmin("blogs/create", {
        type: typeValue,
        blog: editorData,
        headImage: imgUrl,
        headContent: content,
        title: title,
        tableOfContents: toc,
        writtenBy: writer,
      });
      toast.success(
        `${typeValue === 1 ? "Blog" : "Announcement"} added successfully!`
      );
      // setEditorData("");
      // setTitle("");
      // setToc("");
      // setWriter("");
      // setImageFile(null);
      // setImgUrl("");
      // setLoading(false);
    } catch (err) {
      console.error("Error submitting blog:", err);
      toast.error("something went wrong");
      setLoading(false);
    }
  };

  const handleBlogPost = () => {
    let plainText = editorData.replace(/<[^>]*>?/gm, "");
    plainText = plainText.replace(/&nbsp;/g, " ");
    const content = plainText.substring(0, 220) + "...";

    setLoading(true);
    protectedApiPostAdmin("blogs/create-blog", {
      title: title,
      titleBody: titleBody,
      metaTitle: metaTitle,
      metaDescription: metaDesc,
      keywords: keywords,
      slug: slug,
      body: content,
      category: blogCategory,
      thumbnail: thumbnailUrl,
    })
      .then((response) => {
        console.log(response);
        toast.success("Blog Posted Successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Blog Post Failed");
        setLoading(false);
      });
  };

  const handleThumbnailChange = async (e) => {
    console.log("chl rhi");
    
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    try {
      const response = await protectedApiPostAdmin(
        "blogs/blogImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("success", response.data);
      setThumbnailFile(e.target.files[0]);
      setThumbnailUrl(API_URL + response.data.slice(2));
      toast.success("Thumbnail uploaded successfully");
      return { default: response.data };
    } catch (error) {
      console.error(
        "Image upload failed:",
        error.response?.data?.message || error.message
      );
      setThumbnailFile(null);
      setThumbnailUrl("");
      throw new Error("Image upload failed");
    }
  };

  const handleInlineImgChange = (e) => {
    setInlineImg(e.target.files[0]);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="my-4 pe-3">
      <p className="description text-sm text-end">{`Date: ${dateToShow.toLocaleDateString(
        "en-us",
        { month: "long", day: "2-digit", year: "numeric" }
      )} | Time: ${dateToShow
        .getUTCHours()
        .toString()
        .padStart(2, "0")}:${dateToShow
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")} ${dateToShow.getHours() > 12 ? "PM" : "AM"}`}</p>

      {/* Blog Form */}
      <form className="flex flex-col justify-start items-stretch gap-3 my-5">
        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="blog-title" className="description ps-3">
            Title
          </label>
          <input
            type="text"
            name="blog-title"
            id="blog-title"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="description text-[10px] text-end pe-3">
            12 : Word Limit
          </span>
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="blog-title-body" className="description ps-3">
            Title Body
          </label>
          <textarea
            type="text"
            name="blog-title-body"
            id="blog-title-body"
            className="description text-[14px] text-[#6D6A6A] min-h-[100px] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-4"
            value={titleBody}
            onChange={(e) => setTitleBody(e.target.value)}
          />
          <span className="description text-[10px] text-end pe-3">
            50 : Word Limit
          </span>
        </div>

        <div className="flex flex-col justify-start items-stretch gap-2">
          <label htmlFor="blog-body" className="description ps-3">
            Body
          </label>
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={handleEditorReady}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditorData(data);
            }}
            config={{
              placeholder: "Start typing here...",
              ckfinder: {
                uploadUrl: `${API_URL}/admin/v1/blogs/upload/image`,
              },
              toolbar: [
                "heading",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "insertTable",
                "|",
                "uploadImage",
                "blockQuote",
                "|",
                "undo",
                "redo",
              ],
              image: {
                toolbar: [
                  "imageTextAlternative",
                  "|",
                  "imageStyle:full",
                  "imageStyle:side",
                ],
              },
            }}
          />
        </div>

        <div className="flex flex-col mt-3 justify-start items-stretch gap-2">
          <label htmlFor="blog-heading" className="description ps-3">
            Meta Title
          </label>
          <input
            type="text"
            name="blog-heading"
            id="blog-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-3 justify-start items-stretch gap-2">
          <label htmlFor="blog-heading" className="description ps-3">
            Meta description
          </label>
          <input
            type="text"
            name="blog-heading"
            id="blog-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-3 justify-start items-stretch gap-2">
          <label htmlFor="blog-heading" className="description ps-3">
            Meta keywords
          </label>
          <input
            type="text"
            name="blog-heading"
            id="blog-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-3 justify-start items-stretch gap-2">
          <label htmlFor="blog-heading" className="description ps-3">
            Slug
          </label>
          <input
            type="text"
            name="blog-heading"
            id="blog-heading"
            className="description text-[14px] text-[#6D6A6A] font-bold outline-none bg-[#E8E8E8] rounded-[0.5rem] px-4 py-2"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
        </div>

        <div className="flex justify-start items-center gap-6 my-6">
          <div className="relative w-1/4">
            <label
              htmlFor="blog-thumbnail"
              className="flex flex-col justify-center items-center gap-0 bg-[#E8E8E8] py-5 w-full rounded-[0.5rem] cursor-pointer"
              style={{
                cursor: thumbnailFile && thumbnailUrl ? "default" : "pointer",
              }}
            >
              <p className="header text-[#6D6A6A] text-lg">+</p>
              <p className="header text-[#6D6A6A] text-base">Thumbnail</p>
              <input
                type="file"
                name="blog-thumbnail"
                id="blog-thumbnail"
                hidden={true}
                onChange={handleThumbnailChange}
                disabled={thumbnailFile && thumbnailUrl}
              />
            </label>
            <p className="description text-xs text-[#242424] text-center mt-1">
              {thumbnailFile && thumbnailUrl && thumbnailFile.name}
            </p>
          </div>
          {/* <div className="relative w-1/4">
            <label
              htmlFor="blog-inline-image"
              className="flex flex-col justify-center items-center gap-0 bg-[#E8E8E8] py-5 w-full rounded-[0.5rem]"
            >
              <p className="header text-[#6D6A6A] text-lg">+</p>
              <p className="header text-[#6D6A6A] text-base">Inline Image</p>
              <input
                type="file"
                name="blog-inline-image"
                id="blog-inline-image"
                hidden={true}
                onChange={handleInlineImgChange}
                disabled
              />
            </label>
            {thumbnailFile && thumbnailUrl && (
              <p className="description text-xs text-[#242424] text-center mt-5">
                {" "}
              </p>
            )}
          </div> */}
          <div className="flex flex-col justify-center items-start gap-3 mx-10">
            <h6 className="description text-lg">Category</h6>
            <div className="flex justify-start items-center gap-4">
              <label
                htmlFor="blog-category-vyug"
                className="description text-base flex gap-2"
              >
                <input
                  type="radio"
                  name="blog-category-vyug"
                  id="blog-category-vyug"
                  className="text-[#242424] w-[18px]"
                  value={"vyug"}
                  checked={blogCategory === "vyug"}
                  onChange={() => setBlogCategory("vyug")}
                />
                VYUG
              </label>
              <label
                htmlFor="blog-category-general"
                className="description text-base flex gap-2"
              >
                <input
                  type="radio"
                  name="blog-category-general"
                  id="blog-category-general"
                  className="text-[#242424] w-[18px]"
                  value={"general"}
                  checked={blogCategory === "general"}
                  onChange={() => setBlogCategory("general")}
                />
                General
              </label>
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center ps-28 ms-4">
              <CircularProgress className="text-[#242424]" />
            </div>
          ) : (
            <button
              onClick={handleBlogPost}
              className="description text-[#fff] font-bold bg-[#242424] rounded-[5rem] px-8 py-2 ms-auto"
            >
              POST
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Blogs;
