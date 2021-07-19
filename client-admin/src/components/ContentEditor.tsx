import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ImageLoader from "./ImageLoader";
import ContentInterfaceProps from "../interfaces/ContentInterfaceProps";

interface IProps {
  content: ContentInterfaceProps | null;
  onSaveContent: (data: ContentInterfaceProps) => void;
}
interface IFormInputs {
  textTitle: string;
  textParagraph: string;
  headTitle: string;
  headDesc: string;
}

const ContentEditor: React.FC<IProps> = ({ content, onSaveContent }) => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (
    data: ContentInterfaceProps
  ): void => {
    onSaveContent(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="myForm"
      className={classes.root}>
      <Controller
        name="textTitle"
        control={control}
        rules={{ required: true }}
        defaultValue={content ? content.textTitle : ""}
        render={({ field }) => (
          <>
            <TextField
              label="Text title"
              multiline
              variant="outlined"
              rows={4}
              className={classes.inputGroup}
              {...field}
            />
            {errors.textTitle?.type === "required" && (
              <span className={classes.errorField}>Text title required</span>
            )}
          </>
        )}
      />
      <Controller
        name="textParagraph"
        control={control}
        rules={{ required: true }}
        defaultValue={content ? content.textParagraph : ""}
        render={({ field }) => (
          <>
            <TextField
              label="Text paragraph"
              multiline
              variant="outlined"
              rows={4}
              className={classes.inputGroup}
              {...field}
            />
            {errors.textParagraph?.type === "required" && (
              <span className={classes.errorField}>
                Text paragraph required
              </span>
            )}
          </>
        )}
      />
      <Controller
        name="headTitle"
        control={control}
        rules={{ required: true }}
        defaultValue={content ? content.headTitle : ""}
        render={({ field }) => (
          <>
            <TextField
              label="Head Title"
              multiline
              variant="outlined"
              rows={4}
              className={classes.inputGroup}
              {...field}
            />
            {errors.headTitle?.type === "required" && (
              <span className={classes.errorField}>Head title required</span>
            )}
          </>
        )}
      />
      <Controller
        name="headDesc"
        control={control}
        rules={{ required: true }}
        defaultValue={content ? content.headDesc : ""}
        render={({ field }) => (
          <>
            <TextField
              label="Head description"
              multiline
              variant="outlined"
              rows={4}
              className={classes.inputGroup}
              {...field}
            />
            {errors.headDesc?.type === "required" && (
              <span className={classes.errorField}>
                Head description required
              </span>
            )}
          </>
        )}
      />
      <ImageLoader />
      <Button
        type="submit"
        form="myForm"
        variant="contained"
        color="primary"
        className={classes.submitBtn}>
        Save
      </Button>
    </form>
  );
};

export default ContentEditor;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem 1rem",
      maxWidth: "350px",
      margin: "0 2rem"
    },
    inputGroup: {
      margin: "0.25rem 0.75rem 0.15rem"
    },
    submitBtn: {
      marginTop: "3rem"
    },
    errorField: {
      marginBottom: "1rem",
      color: theme.palette.error.main
    }
  })
);
