import { FC, useState } from "react";
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import { Textarea } from "../Input/TextArea/TextArea";

interface Props{
    title: string;
    onChange: (value: string) => void;
}

const EditableContent: FC<Props> = ({
    title,
    onChange
}) => {
    const [state, setState] = useState({
        value: title,
        editable: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setState({ ...state, value });
    };

    const edit = () => {
        setState({ ...state, editable: true });
    };

    const check = () => {
        setState({ ...state, editable: false });
        onChange(state.value);
    };

    const { value, editable } = state;

    return (
        <div className="NoteContent">
            {editable ?
                (
                    <div className="NoteEditWrapper">
                        <Textarea
                            rows={3}
                            value={value}
                            onChange={handleChange}
                            onPressEnter={check}
                        />
                        <CheckOutlined className="NoteEditIcon" onClick={check} />
                    </div>
                ) : (
                    <p className="NoteTextWrapper" onClick={edit}>
                        {value || ' '}
                        <EditOutlined className="NoteEditIcon" />
                    </p>
                )}
        </div>
    )
};

export { EditableContent };
