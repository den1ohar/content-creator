import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ImageLoader from "./ImageLoader";
import ContentInterfaceProps from "../interfaces/ContentInterfaceProps";

interface IProps {
  content: ContentInterfaceProps | null;
  onSaveContent: (data: ContentInterfaceProps) => void;
  pages: string[];
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  page: string;
  handleUpdateImage: (file: any) => void;
}
interface IFormInputs {
  textTitle: string | "";
  textParagraph: string | "";
  headTitle: string | "";
  headDesc: string | "";
}

const ContentEditor: React.FC<IProps> = ({
  content,
  onSaveContent,
  handleChange,
  page,
  pages,
  handleUpdateImage
}) => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset
  } = useForm<IFormInputs>({
    defaultValues: {
      textTitle: "",
      textParagraph: "",
      headTitle: "",
      headDesc: ""
    }
  });

  const onSubmit: SubmitHandler<IFormInputs> = (
    data: ContentInterfaceProps
  ): void => {
    onSaveContent(data);
  };

  useEffect(() => {
    if (content) {
      setValue("textTitle", content.textTitle);
      setValue("textParagraph", content.textParagraph);
      setValue("headTitle", content.headTitle);
      setValue("headDesc", content.headDesc);
    } else {
      reset({
        textTitle: "",
        textParagraph: "",
        headTitle: "",
        headDesc: ""
      });
    }
  }, [content, setValue, reset]);

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Page</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label=""
          className={classes.select}
          value={page}
          onChange={handleChange}>
          {pages.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <form onSubmit={handleSubmit(onSubmit)} id="myForm">
        <Controller
          name="textTitle"
          control={control}
          rules={{ required: true }}
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
        <ImageLoader handleUpdateImage={handleUpdateImage} />
        <Button
          type="submit"
          form="myForm"
          variant="contained"
          color="primary"
          className={classes.submitBtn}>
          {content ? "Edit" : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default ContentEditor;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem 0",
      maxWidth: "350px",
      margin: "0 2rem"
    },
    inputGroup: {
      margin: "0.25rem 0 1.5rem"
    },
    submitBtn: {
      marginTop: "2rem"
    },
    errorField: {
      marginBottom: "1rem",
      color: theme.palette.error.main
    },
    formControl: {
      marginBottom: "1rem"
    },
    select: {
      marginBottom: "1rem",
      maxWidth: "150px",
      width: "100%"
    }
  })
);
