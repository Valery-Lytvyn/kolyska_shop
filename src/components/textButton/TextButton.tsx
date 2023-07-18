import "./textButton.scss";

interface TextButtonProps {
  text: string;
  onClick?: () => void;
}

function TextButton({ text, onClick }: TextButtonProps) {
  return (
    <button className="text_button" onClick={onClick}>
      {text}
    </button>
  );
}

export default TextButton;
