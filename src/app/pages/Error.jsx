import { Button } from "@/components/ui/button"
import Container from "../components/Container"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <Container className="bg-black text-white flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <p className="text-lg font-medium">Sorry, This Page Doesn&#39;t Exist!</p>
        <Button onClick={()=>navigate('/')}>Back to Main Page</Button>
      </div>
    </Container>
  )
}

export default Error