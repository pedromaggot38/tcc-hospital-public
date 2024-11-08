import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const JoinUs = () => {
    return (
        <div>
            <div className="flex gap-4 mb-2 justify-start place-items-center">
                <Link href="/">
                    <Button variant="outline" size="icon" className="h-7 w-7 block sm:hidden">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar</span>
                    </Button>
                </Link>
                <h1 className="text-3xl font-semibold">Junte-se a nós</h1>
            </div>
        </div>
    )
}

export default JoinUs