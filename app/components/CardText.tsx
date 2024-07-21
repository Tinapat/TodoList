import React, { useState } from 'react'
import { Card, Input } from '@nextui-org/react'
import ButtonEdit from './ButtonEdit'
import ButtonDelete from './ButtonDelete'
import { note } from '../types/note'

type Props = {
  note: note
  noteAll: note[]
  setNoteAll: React.Dispatch<React.SetStateAction<note[]>>

}

export default function CardText({ note, noteAll, setNoteAll }: Props) {
  const [showEdit, setShowEdit] = useState(false)
  const [noteEdit, setNoteEdit] = useState<note>({
    id: note.id,
    message: note.message
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteEdit({ ...noteEdit, message: e.target.value })
  }

  return (
    <Card className=' flex items-center justify-between flex-row bg-gray-500 p-4 cursor-pointer'>
      {
        showEdit
          ? <Input onChange={handleChange} value={noteEdit.message} className=' mr-2' />
          : <p className=' text-white px-2'>
            {note.message}
          </p>
      }
      <div className='flex space-x-2'>
        <ButtonEdit
          noteAll={noteAll}
          setNoteAll={setNoteAll}
          noteEdit={noteEdit}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
        <ButtonDelete
          noteAll={noteAll}
          setNoteAll={setNoteAll}
          id={note.id}
        />
      </div>
    </Card>
  )
}
