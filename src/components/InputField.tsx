import "./styles/index.css";

interface InputFieldProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: React.MouseEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, handleSubmit }) => {
	return (
		<form className="input">
			<input
				type="text"
				className="input__box"
				placeholder="Enter a Task"
				value={todo}
				onChange={e => setTodo(e.target.value)}
			/>
			<button type="submit" className="input__submit" onClick={e => handleSubmit(e)}>
				Go
			</button>
		</form>
	);
};

export default InputField;
