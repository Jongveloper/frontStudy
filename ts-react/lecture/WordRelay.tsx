import * as React from 'react';
import { useState, useRef, useCallback } from "react";

const WordRelay = () => {
  const [word, setWord] = useState('우디');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    if (word[word.length - 1] === value[0]) {
      setResult('이어가세용');
      setWord(value);
      setValue('');
      if (input) {
        input.focus();
      }
    } else {
      setResult('틀렸습니다!');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }, [value])

  const onChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setValue(e.currentTarget.value)
  }, []);
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  )
}


export default WordRelay;