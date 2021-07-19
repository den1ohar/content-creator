import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

export default function ImageLoader() {
  const [open, setOpen] = useState(false);

  const onSaveImage = (files: any) => {
    console.log("Files:", files[0]);
    //  setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
        Add Image
      </Button>

      <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"cancel"}
        submitButtonText={"save"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          onSaveImage(files);
        }}
        filesLimit={1}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </div>
  );
}
