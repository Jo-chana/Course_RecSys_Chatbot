import { Button } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, writeMessage } from '../actions/actions';
import { AppState } from '../reducers';
import { SelectionOptionList } from './ChatDialog';

interface UserSelectDialogProps {
  buttons: SelectionOptionList[];
}

const UserSelectDialog = ({ buttons }: UserSelectDialogProps) => {
  const dispatch = useDispatch();
  const chatInfo = useSelector(
    ({ ins_id, intent_id, param_id, user_id }: AppState) => ({
      ins_id,
      intent_id,
      param_id,
      user_id,
    })
  );

  const handleClick = (value: number, label: string) => (event: any) => {
    dispatch(writeMessage(label));
    dispatch(sendMessage({ ...chatInfo, input_sentence: value }));
  };

  return (
    <>
      {buttons.map(({ value, label }, index) => (
        <Button
          key={index}
          style={{ margin: '2px' }}
          type="default"
          block
          onClick={handleClick(value, label)}
        >
          {label}
        </Button>
      ))}
    </>
  );
};

export default UserSelectDialog;
