import { Button } from '@nextui-org/react'
import React from 'react'
import { MdEdit } from "react-icons/md";
import { note } from '../types/note';

type Props = {
  noteAll: note[]
  setNoteAll: React.Dispatch<React.SetStateAction<note[]>>
  noteEdit: note
  showEdit: boolean
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ButtonEdit({ noteAll, setNoteAll, noteEdit, showEdit, setShowEdit }: Props) {
  const handleClick = () => {
    setShowEdit(!showEdit)
    const editNote = noteAll.map(note => note.id === noteEdit.id ? noteEdit : note)
    setNoteAll(editNote)
  }

  return (
    <Button isIconOnly onClick={handleClick}>
      <MdEdit />
    </Button >
  )
}
