import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "idle" | "submitting" | "success" | "error";
}

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  status: "idle",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: keyof ContactFormState; value: string }>
    ) {
      const { field, value } = action.payload;
      if (field !== "status") {
        (state as Record<string, string>)[field] = value;
      }
    },
    setStatus(
      state,
      action: PayloadAction<ContactFormState["status"]>
    ) {
      state.status = action.payload;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const { updateField, setStatus, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
