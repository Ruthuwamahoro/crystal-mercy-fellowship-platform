import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Payment } from "./payment"

export function DialogDemo({ children, amount }: { children: React.ReactNode, amount: number }) {
  // const returnUrl = `http://www.localhost:3000/payment-success?amount=${amount}`
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[725px] bg-white text-black">
        <Payment amount={amount}/>
      </DialogContent>
    </Dialog>
  )
}
