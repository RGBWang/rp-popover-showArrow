import { Box, SxProps } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
export type MPorops = {
    maxHeight?: string | number;
    bodySx?: SxProps;
};
export const App = (props: MPorops) => {
    const formState = useForm<MPorops>();
    return (
        <FormProvider {...formState}>
            <input {...formState.register("maxHeight")} />
        </FormProvider>
    );
};
