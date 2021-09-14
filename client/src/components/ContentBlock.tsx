import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import ContentInterfaceProps from "interfaces/ContentInterfaceProps";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "2rem"
    }
  })
);

const ContentBlock: React.FC<ContentInterfaceProps> = ({
  url = "",
  textTitle = "Text Title",
  textParagraph = "Text Paragraph",
  headTitle = "Head Title",
  headDesc = "Head Descriptions "
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Grid className={classes.root}>
        <Typography variant="h2" component="h2" gutterBottom>
          {textTitle}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {textParagraph}
        </Typography>
        <Typography variant="h4" component="h4" gutterBottom>
          {headTitle}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {headDesc}
        </Typography>
      </Grid>
    </Container>
  );
};

export default ContentBlock;
