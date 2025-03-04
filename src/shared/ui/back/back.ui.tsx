import { KeyboardArrowLeft } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate(-1)}
      className="r-md:hidden p-3 min-w-[0px] absolute top-[40px] left-[-30px] r-md:top-[-50px]
      border rounded-xl border-[#E4E4E7] border-solid"
    >
      <KeyboardArrowLeft className="text-black w-6 h-6" />
    </Button>
  )
}
