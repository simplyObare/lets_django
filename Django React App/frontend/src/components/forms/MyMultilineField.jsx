import * as React from 'react'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

export default function MyMultilineField(props) {
  const { label, placeholder, name, control } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id="standard-multiline-static"
          label={label}
          multiline
          rows={4}
          value={value}
          onChange={onChange}
          variant="standard"
          placeholder={placeholder}
          error={!!error}
          helperText={error ? error.message : ''}
        />
      )}
    />
  )
}
