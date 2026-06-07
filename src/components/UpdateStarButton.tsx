import { Button } from "./ui/button";

export default function UpdateStarButton() {
    return (
        <Button onClick={async () =>{
            await fetch("")
        }}>
            Atualizar
        </Button>
    )
}