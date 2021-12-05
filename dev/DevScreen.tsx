import axios from "axios";
import gql from "graphql-tag";
import { useEffect, useRef, useState } from "react";
import { FaImage, FaImages, FaTimes, FaTimesCircle } from "react-icons/fa";
import client from "../api/apollo-client";
import { ImagesInput } from "../forms/ImagesInput";

interface selectedFile {
  file: File;
  imageSrc: string | ArrayBuffer | null;
}
export function DevScreen() {
  const [uploadLink, setUploadLink] = useState();

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

  return (
    <div className="w-full">
      {uploadLink}
      <ImagesInput />
    </div>
  );
}
