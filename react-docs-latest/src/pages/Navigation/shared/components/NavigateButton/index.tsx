interface Props {
  onClick: () => void;
  buttonText: string;
}

const Button = ({
  onClick,
  buttonText,
}: Props) => {
  return (
    <div>
      <button id='button' onClick={onClick}>{buttonText}</button>
    </div>
  );
}

export default Button;