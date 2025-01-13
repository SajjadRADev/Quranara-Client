"use client";

import { Editor } from "@tiptap/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TiptapSetImageSchema, TiptapSetImageSchemaType } from "@/validators/editor";

import TextField from "../TextField";

import Button from "@/components/ui/Button";

type TiptapSetImageFormProps = { editor: Editor; onClose: () => void };

function TiptapSetImageForm({ editor, onClose }: TiptapSetImageFormProps) {
    const { control, handleSubmit } = useForm<TiptapSetImageSchemaType>({
        defaultValues: {
            src: "",
            alt: "",
        },
        resolver: zodResolver(TiptapSetImageSchema),
    });

    const submitHandler = (data: TiptapSetImageSchemaType) => {
        editor.commands.setImage(data);
        onClose();
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="src" label="آدرس تصویر" placeholder="آدرس تصویر را وارد کنید" />
            <TextField control={control} name="alt" label="توضیحات" placeholder="توضیحات را وارد کنید" caption="با دقت وارد شود، در سئو تاثیر دارد" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="w-full">
                    ایجاد تصویر جدید
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default TiptapSetImageForm;
