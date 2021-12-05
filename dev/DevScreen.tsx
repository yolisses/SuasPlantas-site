import axios from "axios";
import gql from "graphql-tag";
import { useEffect, useRef, useState } from "react";
import client from "../api/apollo-client";

export function DevScreen() {
  const [uploadLink, setUploadLink] = useState();
  const [files, setFiles] = useState<File[]>();
  const inputRef = useRef();

  async function getUploadLink() {
    const query = gql`
      query {
        uploadLink
      }
    `;
    const res = await client.query({ query });
    setUploadLink(res.data.uploadLink);
  }

  useEffect(() => {
    getUploadLink();
  }, []);

  function handleSubmitClick() {
    axios.put(uploadLink!, files![0]);

    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  }

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files);
    setFiles(files);
    console.log("files:", files);
  };

  return (
    <div>
      <div>{uploadLink}</div>
      <label>
        <div>massa</div>
        <input
          type="file"
          onChange={handleFileSelected}
          accept=".jpg, .jpeg, .png, .webp"
        ></input>
      </label>
      <input
        ref={inputRef}
        type="button"
        value="upload"
        onClick={handleSubmitClick}
      />
    </div>
  );
}
