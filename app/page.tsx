'use client'
import React, { ChangeEvent, useState } from 'react'
import { Button, Input, Card, CardBody, Spacer, useDisclosure } from '@nextui-org/react'
import CardText from './components/CardText'
import { RiMailSendFill } from "react-icons/ri";
import { note } from './types/note';
import { FaClipboardList } from "react-icons/fa";
import ModalNoteAll from './components/ModalNoteAll';

export default function page() {
  const [noteAll, setNoteAll] = useState<note[]>([])
  const [note, setNote] = useState<note>({
    id: 0,
    message: ''
  })
  const [alert, setAlert] = useState('')
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote({ id: note.id, message: e.target.value })
  }
  const handleClick = () => {
    const noteFilter = noteAll.some(noteAll => noteAll.message === note.message)
    if (!!note.message) {
      if (noteFilter) {
        setAlert('ข้อมูลซ้ำ')
        setNote({ id: 0, message: '' })
      } else {
        setNoteAll([...noteAll, note])
        setNote({ id: note.id + 1, message: '' })
        setAlert('')
      }
    } else {
      setAlert('กรุณากรอกข้อมูล')
    }
  }
  console.log(noteAll)

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className=' text-6xl' style={{ color: '#FF6355' }}>
        เขียนโน้ต
      </h1>
      <Spacer y={8} />
      <div className=" flex ">
        <Input
          label="ข้อความ"
          className=' w-96'
          name='message'
          value={note.message}
          onChange={handleChange}
          placeholder={alert}
        />
        <Spacer x={2} />
        <Button
          size='lg'
          isIconOnly
          className=' w-14 h-14'
          onClick={handleClick}
          style={{
            backgroundColor: '#FBA949',
            color: '#ffffff'
          }}
        >
          <RiMailSendFill />
        </Button>
        <Spacer x={2} />
        <Button
          size='lg'
          isIconOnly
          className=' w-14 h-14'
          onPress={onOpen}
          style={{
            backgroundColor: '#9c4f96',
            color: '#ffffff'
          }}
        >
          <FaClipboardList />
        </Button>
      </div>
      <ModalNoteAll
        noteAll={noteAll}
        setNoteAll={setNoteAll}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
