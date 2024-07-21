import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { ImBin2 } from "react-icons/im";
import { note } from '../types/note';

type Props = {
  id: number
  noteAll: note[]
  setNoteAll: React.Dispatch<React.SetStateAction<note[]>>
}

export default function ButtonDelete({ id, noteAll, setNoteAll }: Props) {
  const handleDelete = () => {
    const updatedNotes = noteAll.filter(note => note.id !== id);
    setNoteAll(updatedNotes);
  };

  return (
    <Button
      isIconOnly
      onClick={handleDelete}
    >
      <ImBin2 />
    </Button >
  )
}
