import { Box, Typography } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MySelectField from './forms/MySelectField'
import MyDatePicker from './forms/MyDatePicker'
import MyMultilineField from './forms/MyMultilineField'
import { useForm } from 'react-hook-form'

const Create = () => {
  const { handleSubmit, reset, setValue, control } = useForm()

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          marginBottom: '10px',
          backgroundColor: '#00003f',
        }}
      >
        <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
          Create records
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          boxShadow: 3,
          padding: 4,
        }}
      >
        <Box>
          <MyTextField
            label="Name"
            name="name"
            placeholder="Provide project name"
            control={control}
          />
        </Box>

        <Box></Box>
      </Box>
    </div>
  )
}
export default Create
