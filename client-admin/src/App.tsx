import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import ContentEditor from "./components/ContentEditor";
import ContentViewer from "./components/ContentViewer";
import {
  getContent,
  createContent,
  updateContent,
  createImage
} from "./api/rest/Content";
import ContentInterfaceProps from "./interfaces/ContentInterfaceProps";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import LanguageSelector from "./components/LanguageSelector";
import useLanguageInit from "./hooks/useLanguageInit";
import "./App.css";
import { AxiosResponse } from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-around"
    },
    header: {
      margin: "2rem 0",
      display: "flex",
      justifyContent: "space-between"
    }
  })
);

function App() {
  const classes = useStyles();
  const [content, setContent] = useState(null);
  const [language, setLanguage] = useState("en");
  const [page, setPage] = useState("main");
  const [loadingFetchContent, setLoadingFetchContent] = useState(false);

  useLanguageInit(language);

  useEffect(() => {
    fetchContentData(language, page);
  }, [language, page]);

  const fetchContentData = async (language: string, page: string) => {
    setLoadingFetchContent(true);
    const contentData: AxiosResponse = await getContent(language, page);
    const { data }: any = contentData.data;
    setContent(data);
    setLoadingFetchContent(false);
  };

  const saveContent = async (body: ContentInterfaceProps) => {
    const resNewContent: AxiosResponse = content
      ? await updateContent(body, language, page)
      : await createContent(body, language, page);

    const { data }: any = resNewContent.data;
    setContent(data);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };

  const onChangePage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPage(event.target.value as string);
  };

  const handleUpdateImage = async (file: any) => {
    await createImage(file);
  };
  return (
    <div className="App">
      <Container maxWidth={false} className={classes.header}>
        <Typography variant="h3">Admin panel - Content creator</Typography>
        <LanguageSelector
          languages={["en", "sp", "fr"]}
          language={language}
          handleChange={handleChange}
        />
      </Container>
      <Container maxWidth="lg" className={classes.root}>
        <ContentEditor
          content={content}
          onSaveContent={saveContent}
          handleChange={onChangePage}
          page={page}
          pages={["main", "services", "about"]}
          handleUpdateImage={handleUpdateImage}
        />
        <ContentViewer content={content} />
      </Container>
    </div>
  );
}

export default App;
