import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ContentInterfaceProps from "../interfaces/ContentInterfaceProps";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface IProps {
  content: ContentInterfaceProps | null;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "0",
      padding: "2rem 1rem"
    }
  })
);

const ContentViewer: React.FC<IProps> = ({ content }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      {content !== null ? (
        <div>
          <Typography variant="h2" component="h2" gutterBottom>
            {content.textTitle}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {content.textParagraph}
          </Typography>
          <br />
          <Typography variant="h4" component="h4" gutterBottom>
            {content.headTitle}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {content.headDesc}
          </Typography>
        </div>
      ) : (
        "You don't have any content"
      )}
    </Grid>
  );
};

export default ContentViewer;
