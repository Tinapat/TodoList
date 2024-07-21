import { Modal, ModalContent } from '@nextui-org/react'
import React from 'react'
import { note } from '../types/note'
import CardText from './CardText'

type Props = {
  noteAll: note[]
  setNoteAll: React.Dispatch<React.SetStateAction<note[]>>
  isOpen: boolean
  onOpenChange: () => void
}

export default function ModalNoteAll({ noteAll, setNoteAll, isOpen, onOpenChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top' className='modal'>
      <ModalContent className=' bg-transparent space-y-4 '>
        {noteAll.map((note) => (<CardText  key={note.id} note={note}noteAll={noteAll} setNoteAll={setNoteAll}  />))}
      </ModalContent>
    </Modal >
  )
}
