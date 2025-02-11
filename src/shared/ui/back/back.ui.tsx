import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate(-1)}
      className="p-3 border rounded-xl border-[#E4E4E7] border-solid min-w-[0px] absolute left-2"
    >
      <KeyboardArrowLeft className="text-black w-6 h-6" />
    </Button>
  )
}
