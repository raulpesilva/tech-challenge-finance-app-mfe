import { combineStyles } from '@/utils/combineStyles';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Button } from '../Button';
import styles from './styles.module.scss';

interface InputFileProps {
  id: string;
  name: string;
  label: string;
  className?: string;
  onInput?: (file: File) => void;
  accept?: string;
  attachment?: string | null;
}

export const InputFile = ({
  id,
  name,
  label,
  className,
  onInput,
  accept = 'image/png, image/jpeg',
  attachment = null,
}: InputFileProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(attachment);

  const handleRemove = useCallback(() => {
    setFile(null);
    setImage(null);
  }, [setFile, setImage]);

  useEffect(() => {
    if (attachment === '') handleRemove();
  }, [attachment, handleRemove]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files.length) return;

    const [selectedFile] = Array.from(files);
    setFile(selectedFile);
    onInput?.(selectedFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.onload = (e) => e.target?.result && setImage(e.target.result as string);
  };

  return (
    <div className={combineStyles([styles.container, className && className])}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input type='file' id={id} className={styles.input} onInput={handleInput} accept={accept} multiple={false} />

      {!!image && <input type='hidden' name={name} value={image} />}
      {!!image && (
        <Image
          src={image as string}
          alt={file?.name ?? 'Upload image'}
          className={styles.image}
          layout='responsive'
          width={100}
          height={100}
        />
      )}

      {(file || image) && (
        <Button onClick={handleRemove} variant='outlined' color='error'>
          Remover
        </Button>
      )}

      {file && (
        <Typography variant='caption' color='text' className={styles.fileName}>
          {file.name}
        </Typography>
      )}
    </div>
  );
};
