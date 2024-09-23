import React, { ChangeEvent, useState } from "react";
import Stopwatch from "./Stopwatch";
import styles from "../styles/maindiv.module.css";

const Main = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const fileUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = target.files as FileList;
    setFile(files[0]);
  };
  return (
    <div className={styles.content}>
      <h1>스탑워치</h1>
      <Stopwatch image={file} />

      <label className={styles.uploadLabel}>
        파일 선택
        <input
          type="file"
          onChange={fileUploadHandler}
          className={styles.fileInput}
        />
      </label>
    </div>
  );
};

export default Main;
