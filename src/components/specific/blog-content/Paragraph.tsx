type ParagraphProps = React.ComponentProps<"p">;

function Paragraph({ children }: ParagraphProps) {
    return <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line leading-8">{children}</p>;
}

export default Paragraph;
