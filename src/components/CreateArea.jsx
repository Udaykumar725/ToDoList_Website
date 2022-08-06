import { Fab } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'

const CreateArea = (props) => {
  const [isExpanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    // console.log(event.target)
    const { name, value } = event.target

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      }
    })
  }

  function submitNotes(event) {
    props.onAdd(note)
    setNote({
      title: '',
      content: '',
    })
    event.preventDefault()
  }

  function expand() {
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}

        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          placeholder="This is a note..."
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNotes}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  )
}

export default CreateArea
