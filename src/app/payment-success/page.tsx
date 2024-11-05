export default function PaymentSuccess({
    searchParams: { amount },
}: {
    searchParams: { amount: string };
}){
    return (
        <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2"> Thank you!</h1>
                <h2 className="text-2xl">
                    You successfully sent
                </h2>
            </div>
        </main>
    )

}

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// export default function PaymentSuccess({children , searchParams: { amount }}: { children: React.ReactNode, searchParams: { amount: string }}) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>{children}</DialogTrigger>
//       <DialogContent className="sm:max-w-[725px] bg-white text-black">
//         <h1>Thank you so much for your donation</h1>
//       </DialogContent>
//     </Dialog>
//   )
// }