import React, { useMemo } from 'react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const EditText = ({ item, onChange }) => {

    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <Slate editor={editor} value={[item]} onChange={(value) => onChange(value, editor)}>
            <Editable placeholder="Enter some plain text..." />
        </Slate>
    )
}

export default EditText