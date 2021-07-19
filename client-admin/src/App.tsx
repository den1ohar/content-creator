import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import ContentEditor from "./components/ContentEditor";
import ContentViewer from "./components/ContentViewer";
import { getContent, createContent } from "./api/rest/Content";
import ContentInterfaceProps from "./interfaces/ContentInterfaceProps";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import LanguageSelector from "./components/LanguageSelector";
import useLanguageInit from "./hooks/useLanguageInit";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-around"
    }
  })
);

function App() {
  const classes = useStyles();
  const [content, setContent] = useState(null);
  const [language, setLanguage] = useState("en");
  const [loadingFetchContent, setLoadingFetchContent] = useState(false);

  useLanguageInit(language);

  useEffect(() => {
    fetchContentData(language);
  }, [language]);

  const fetchContentData = async (language: string) => {
    setLoadingFetchContent(true);
    const contentData: any = await getContent(language);

    setContent(contentData);
    setLoadingFetchContent(false);
  };

  const saveContent = async (data: ContentInterfaceProps) => {
    const newContent: any = await createContent(data);
    setContent(newContent);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLanguage(event.target.value as string);
  };

  return (
    <div className="App">
      <LanguageSelector
        languages={["en", "sp", "fr"]}
        language={language}
        handleChange={handleChange}
      />
      <Container maxWidth="lg" className={classes.root}>
        <ContentEditor content={content} onSaveContent={saveContent} />
        <ContentViewer content={content} />
      </Container>
    </div>
  );
}

export default App;
